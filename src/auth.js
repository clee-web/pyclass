// Supabase integration for user authentication and data persistence
import { supabase } from './supabase.js';

export async function signupUser(name, email, password) {
  try {
    // Step 1: Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('Signup failed');

    const userId = authData.user.id;

    // Step 2: Save user profile to users table
    const { error: dbError } = await supabase.from('users').insert([
      {
        id: userId,
        email,
        username: name.toLowerCase().replace(/\s+/g, '_'),
        full_name: name,
        role: 'student',
      },
    ]);

    if (dbError) throw dbError;

    return { success: true, user: authData.user, userId };
  } catch (error) {
    console.error('Signup error:', error);
    return { success: false, error: error.message };
  }
}

export async function loginUser(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    if (!data.user) throw new Error('Login failed');

    // Fetch user profile
    const { data: userProfile, error: profileError } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError) throw profileError;

    return { success: true, user: data.user, profile: userProfile };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  }
}

export async function logoutUser() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: error.message };
  }
}

export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  } catch (error) {
    console.error('Get user error:', error);
    return null;
  }
}

export async function saveUserProgress(userId, lessonId, score, status) {
  try {
    const { error } = await supabase.from('progress').upsert(
      [
        {
          student_id: userId,
          lesson_id: lessonId,
          score,
          status,
          completed_at: status === 'completed' ? new Date() : null,
        },
      ],
      { onConflict: 'student_id,lesson_id' }
    );

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Save progress error:', error);
    return { success: false, error: error.message };
  }
}

export async function getUserProgress(userId) {
  try {
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('student_id', userId);

    if (error) throw error;
    return { success: true, progress: data };
  } catch (error) {
    console.error('Get progress error:', error);
    return { success: false, error: error.message };
  }
}
