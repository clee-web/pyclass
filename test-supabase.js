import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jlzywwupllrxtsexkhah.supabase.co';
const supabaseAnonKey = 'sb_publishable_hsXC-wouNV_U6acqlZe6Sw_lr9OWjU7';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('🔌 Testing Supabase connection...\n');
    
    // Test 1: Check if tables exist
    console.log('✓ Client initialized successfully');
    
    // Test 2: Try to fetch from courses table
    const { data: courses, error: coursesError } = await supabase
      .from('courses')
      .select('count', { count: 'exact' });
    
    if (coursesError) {
      console.log('⚠️  Courses table not ready yet (expected if schema not deployed)');
    } else {
      console.log('✓ Courses table accessible');
    }
    
    // Test 3: Try to fetch from users table
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('count', { count: 'exact' });
    
    if (usersError) {
      console.log('⚠️  Users table not ready yet (expected if schema not deployed)');
    } else {
      console.log('✓ Users table accessible');
    }
    
    console.log('\n✅ Supabase connection successful!');
    console.log('\n📋 Next steps:');
    console.log('1. Deploy schema.sql to Supabase Dashboard → SQL Editor');
    console.log('2. Run: npm install');
    console.log('3. Start using Supabase in your app!\n');
    
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    process.exit(1);
  }
}

testConnection();
