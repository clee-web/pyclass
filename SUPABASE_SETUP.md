# Supabase Setup & Testing Guide

## ✅ Completed Setup

Your project is now configured for Supabase:

### Files Created:
- ✅ `.env.local` - Supabase credentials
- ✅ `src/supabase.js` - Client initialization
- ✅ `schema.sql` - Database schema
- ✅ `test-supabase.js` - Connection test
- ✅ `package.json` - Updated with dependencies

### Credentials Configured:
```
URL: https://jlzywwupllrxtsexkhah.supabase.co
Key: sb_publishable_hsXC-wouNV_U6acqlZe6Sw_lr9OWjU7
```

---

## 📋 Steps to Complete Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Deploy Database Schema
1. Go to: https://jlzywwupllrxtsexkhah.supabase.co
2. Navigate to: **SQL Editor** → **New Query**
3. Copy & paste contents of `schema.sql`
4. Click **Run** to execute

### Step 3: Test Connection
```bash
node test-supabase.js
```

Expected output:
```
🔌 Testing Supabase connection...

✓ Client initialized successfully
✓ Courses table accessible
✓ Users table accessible

✅ Supabase connection successful!
```

---

## 🚀 Using Supabase in Your App

### Import Client
```javascript
import { supabase } from './src/supabase'
```

### Fetch Courses
```javascript
const { data: courses, error } = await supabase
  .from('courses')
  .select('*')
  .eq('level', 'beginner')
```

### Create a Course
```javascript
const { data, error } = await supabase
  .from('courses')
  .insert([{
    title: 'Python Basics',
    description: 'Learn Python from scratch',
    instructor_id: 'user-id',
    level: 'beginner'
  }])
```

### Track Student Progress
```javascript
const { data, error } = await supabase
  .from('progress')
  .update({ status: 'completed', score: 95 })
  .eq('student_id', 'student-id')
  .eq('lesson_id', 'lesson-id')
```

### Real-time Subscriptions
```javascript
supabase
  .from('progress')
  .on('*', payload => {
    console.log('Progress updated:', payload.new)
  })
  .subscribe()
```

---

## 📚 Database Schema Overview

### tables:
- **users** - User accounts & profiles
- **courses** - Course information
- **lessons** - Individual lessons in courses
- **enrollments** - Student course enrollments
- **progress** - Student lesson completion & scores

### Features:
- ✅ Row-level security (RLS) policies
- ✅ Automatic timestamps
- ✅ Foreign key constraints
- ✅ Performance indexes
- ✅ Cascade deletion

---

## 🔒 Security

Your `.env.local` file:
- Contains sensitive credentials
- Is in `.gitignore` (don't commit)
- Only use in development
- Never share credentials

For production, use Supabase environment variables in your hosting platform.

---

## ✅ Checklist

- [ ] `npm install` completed
- [ ] Schema deployed to Supabase
- [ ] `node test-supabase.js` passed
- [ ] Can see tables in Supabase Dashboard
- [ ] Ready to build your app!

---

## 📖 Next Steps

1. Create authentication UI (login/signup)
2. Build course listing page
3. Add student enrollment
4. Track progress & scoring
5. Deploy to production

