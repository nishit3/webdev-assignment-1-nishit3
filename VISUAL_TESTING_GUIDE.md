# Visual Testing Script - A6 Rubric
## Step-by-Step Testing Guide with Screenshots

---

## 🎬 Test 1: Signin Works with Database

### Steps:
1. Open browser: `http://localhost:3000/Account/Signin`
2. Enter username: `admin` (or any existing user)
3. Enter password: `admin123`
4. Click "Sign in" button

### ✅ Success Criteria:
- [ ] Redirected to Dashboard
- [ ] User name appears in top navigation
- [ ] No error messages
- [ ] URL is `/Dashboard`

### 📸 What you should see:
```
[Sign In Page]
├─ Username field (filled)
├─ Password field (filled)
└─ Blue "Sign in" button

↓ After clicking

[Dashboard Page]
├─ "Welcome back, [Name]!" message
├─ User info in navigation
└─ Quick action cards
```

---

## 🎬 Test 2: Signup Works with Database

### Steps:
1. Navigate to: `http://localhost:3000/Account/Signup`
2. Fill out form:
   ```
   Username: testuser999
   First Name: Test
   Last Name: User
   Email: test999@example.com
   Role: Student
   Password: password123
   Verify Password: password123
   ```
3. Click "Sign Up" button
4. Wait for redirect
5. Click "Sign out" (top right)
6. Try to login with new credentials

### ✅ Success Criteria:
- [ ] No validation errors
- [ ] Automatically logged in after signup
- [ ] Redirected to Profile page
- [ ] Can logout and login again with same credentials
- [ ] New user appears in database

### 📸 What you should see:
```
[Signup Page]
├─ Form with 7 fields
├─ All fields filled
└─ Blue "Sign Up" button

↓ After signup

[Profile Page]
├─ User information displayed
├─ Edit fields available
└─ "Sign out" button visible

↓ After logout and re-login

[Dashboard]
└─ Successfully logged in with new account
```

---

## 🎬 Test 3: Update Works with Database

### Steps:
1. Login to your account
2. Navigate to `/Users`
3. Find yourself in the list
4. Click on your name
5. Click "Edit User" button in details panel
6. Change First Name to "UpdatedName"
7. Click "Save"
8. Click "Sign out"
9. Login again
10. Go back to `/Users`
11. Find yourself and click your name

### ✅ Success Criteria:
- [ ] Name changes immediately in UI after Save
- [ ] Name appears in table
- [ ] Name appears in details panel
- [ ] After logout/login, name is still "UpdatedName"
- [ ] Database contains updated name

### 📸 What you should see:
```
[Users Page - Before Edit]
Your Name: John Doe

↓ Click name → Edit → Change → Save

[Users Page - After Edit]
Your Name: UpdatedName Doe

↓ Logout → Login → Check Users

[Users Page - After Re-login]
Your Name: UpdatedName Doe (persisted!)
```

---

## 🎬 Test 4: Browser Reload Maintains Login

### Steps:
1. Login to your account
2. Navigate to `/Dashboard`
3. Press F5 (reload)
4. Check if still logged in
5. Navigate to `/Users`
6. Press Ctrl+R (reload)
7. Check if still logged in
8. Close browser tab completely
9. Reopen browser
10. Go to `http://localhost:3000/Users`

### ✅ Success Criteria:
- [ ] Still logged in after F5
- [ ] Still logged in after Ctrl+R
- [ ] Still logged in after closing/reopening tab
- [ ] Can access protected pages directly
- [ ] User info still in navigation

### 📸 What you should see:
```
[Before Reload]
├─ Logged in at /Dashboard
└─ User name in navigation

↓ Press F5

[After Reload]
├─ Still at /Dashboard
├─ Still logged in
├─ User name still visible
└─ No redirect to signin
```

---

## 🎬 Test 5: Clicking Users Navigates to Users Screen

### Steps:
1. Login to any account
2. Look at left sidebar
3. Find "Users" link (with people icon)
4. Click "Users"
5. Check URL
6. Check page content

### ✅ Success Criteria:
- [ ] "Users" link visible in sidebar
- [ ] Has icon (group of people)
- [ ] Clicking navigates to `/Users`
- [ ] New page loads with users table
- [ ] Can navigate back and forth

### 📸 What you should see:
```
[Left Sidebar]
├─ Dashboard (selected)
├─ Courses
├─ Calendar
├─ Inbox
├─ Users ← Click here
└─ Labs

↓ After clicking

[Users Management Page]
├─ Title: "Users Management"
├─ "Add People" button (top right)
├─ Filter by Role dropdown
├─ Filter by Name search
├─ Users table
└─ Details panel (empty)
```

---

## 🎬 Test 6: Users Screen Displays All Users

### Steps:
1. Navigate to `/Users`
2. Count rows in table
3. Check each row has:
   - User icon
   - Name (blue, clickable)
   - Username
   - Email
   - Role badge
   - Delete button

### ✅ Success Criteria:
- [ ] Table shows multiple users
- [ ] All users from database visible
- [ ] Each row is complete
- [ ] Role badges are colored correctly:
  - 🔴 Red: ADMIN
  - 🔵 Blue: FACULTY
  - 🟢 Green: STUDENT

### 📸 What you should see:
```
[Users Table]
┌─────────────────┬──────────┬─────────────┬────────┬────────┐
│ Name            │ Username │ Email       │ Role   │ Actions│
├─────────────────┼──────────┼─────────────┼────────┼────────┤
│ 👤 John Doe     │ johndoe  │ john@...    │🟢 STU  │ 🗑️     │
│ 👤 Jane Smith   │ janes    │ jane@...    │🔵 FAC  │ 🗑️     │
│ 👤 Admin User   │ admin    │ admin@...   │🔴 ADM  │ 🗑️     │
└─────────────────┴──────────┴─────────────┴────────┴────────┘
```

---

## 🎬 Test 7: Can Filter Users by Role

### Steps:
1. On `/Users` page
2. Note total users shown (e.g., 10 users)
3. Click "Filter by Role" dropdown
4. Select "Student"
5. Count visible users (should be fewer)
6. Check all have green STUDENT badge
7. Select "Faculty"
8. Check all have blue FACULTY badge
9. Select "Admin"  
10. Check all have red ADMIN badge
11. Select "All Roles"
12. Check all users reappear

### ✅ Success Criteria:
- [ ] Filtering happens instantly (no page reload)
- [ ] Only matching roles shown
- [ ] Badge colors match filter
- [ ] "All Roles" shows everyone
- [ ] No errors or blank screens

### 📸 What you should see:
```
[All Roles Selected] - 10 users
👤 John (🟢 STUDENT)
👤 Jane (🔵 FACULTY)
👤 Bob (🟢 STUDENT)
👤 Alice (🔴 ADMIN)
...

↓ Select "Student"

[Student Filter] - 5 users
👤 John (🟢 STUDENT)
👤 Bob (🟢 STUDENT)
👤 Carol (🟢 STUDENT)
...

↓ Select "Faculty"

[Faculty Filter] - 3 users
👤 Jane (🔵 FACULTY)
👤 Prof Smith (🔵 FACULTY)
...
```

---

## 🎬 Test 8: Can Filter Users by Name

### Steps:
1. On `/Users` page
2. Clear role filter (set to "All Roles")
3. In "Filter by Name" box, type: `a`
4. See users filter immediately
5. Type: `john`
6. See only users with "john" in name/username
7. Type: `SMITH` (uppercase)
8. See case-insensitive matching
9. Clear search box
10. See all users again

### ✅ Success Criteria:
- [ ] Filtering happens as you type
- [ ] Searches first name, last name, and username
- [ ] Case-insensitive
- [ ] Partial matches work
- [ ] Clearing shows all users

### 📸 What you should see:
```
[No Filter] - 10 users
All users visible

↓ Type "john"

[Filter: "john"] - 2 users
👤 John Doe
👤 Johnny Smith

↓ Type "SMITH"

[Filter: "SMITH"] - 3 users
👤 Jane Smith
👤 John Smith
👤 smithy123

↓ Clear box

[No Filter] - 10 users
All users visible again
```

---

## 🎬 Test 9: Clicking Name Shows PeopleDetails

### Steps:
1. On `/Users` page
2. Click any user's name (blue link)
3. Look at right panel
4. See user details appear
5. Click different user's name
6. See details update
7. Click X button in panel

### ✅ Success Criteria:
- [ ] Right panel shows details:
  - Large user icon
  - Full name
  - Username
  - Email
  - Role badge
  - Member since date
  - "Edit User" button
- [ ] Clicking different users updates panel
- [ ] X button closes panel

### 📸 What you should see:
```
[Table]                [Details Panel]
👤 John Doe ←Click→    ┌──────────────────────┐
👤 Jane Smith          │ User Details      [X]│
👤 Bob Wilson          ├──────────────────────┤
                       │      👤 (large)       │
                       │                       │
                       │ Name: John Doe        │
                       │ Username: johndoe     │
                       │ Email: john@test.com  │
                       │ Role: 🟢 STUDENT      │
                       │ Member Since: 1/15/24 │
                       │                       │
                       │ [Edit User] Button    │
                       └──────────────────────┘
```

---

## 🎬 Test 10: Delete Removes from UI Immediately

### Steps:
1. On `/Users` page
2. Count total users (e.g., 10)
3. Find a test user to delete
4. Click red trash icon
5. **Watch carefully:** User should disappear INSTANTLY
6. Confirm in dialog
7. Check user count (should be 9)
8. Note: No loading spinner, no delay

### ✅ Success Criteria:
- [ ] Confirmation dialog appears
- [ ] User disappears immediately after confirm
- [ ] No page reload
- [ ] No delay or loading spinner
- [ ] User count decreases
- [ ] Other users stay visible

### 📸 What you should see:
```
[Before Delete] - 10 users
👤 John Doe
👤 Jane Smith
👤 Test User ← Click🗑️
👤 Bob Wilson

↓ Click trash icon

[Confirmation Dialog]
Are you sure you want to delete this user?
[Cancel]  [OK]

↓ Click OK - INSTANT removal

[After Delete] - 9 users
👤 John Doe
👤 Jane Smith
👤 Bob Wilson (Test User gone!)
```

---

## 🎬 Test 11: Delete Removes from Database

### Steps:
1. After deleting user (Test 10)
2. Note the deleted user's username
3. Press F5 (reload page)
4. Check if user reappears (should NOT)
5. Try to login as deleted user
6. Should fail

### ✅ Success Criteria:
- [ ] Deleted user does NOT reappear after reload
- [ ] User count still lower
- [ ] Cannot login as deleted user
- [ ] Database no longer has user

### 📸 What you should see:
```
[After Delete]
User "testuser123" deleted

↓ Press F5 (reload)

[After Reload]
Still 9 users (not 10)
"testuser123" not in list

↓ Logout → Try login as testuser123

[Login Page]
Username: testuser123
Password: password123
[Sign in]

↓ After clicking Sign in

[Error Message]
"Invalid credentials" or "Unable to login"
```

---

## 🎬 Test 12: Edit Updates UI Immediately

### Steps:
1. On `/Users` page
2. Click any user's name
3. Click "Edit User" button
4. Change First Name to "EditedName"
5. Click "Save"
6. **Watch carefully:** Changes appear INSTANTLY
7. Check table (name updated)
8. Check details panel (name updated)

### ✅ Success Criteria:
- [ ] Edit form appears
- [ ] Can modify fields
- [ ] Save button works
- [ ] Name changes immediately in:
  - Details panel
  - Users table
- [ ] No page reload
- [ ] Edit mode closes automatically

### 📸 What you should see:
```
[Details Panel - View Mode]
Name: John Doe
[Edit User] ← Click

↓

[Details Panel - Edit Mode]
First Name: [John]      ← Change to "EditedName"
Last Name: [Doe]
Username: [johndoe]
Email: [john@test.com]
Role: [Student ▼]
[Save] [Cancel] ← Click Save

↓ INSTANT update

[Details Panel - View Mode]
Name: EditedName Doe ✓

[Table]
👤 EditedName Doe ✓ (also updated!)
```

---

## 🎬 Test 13: Edit Updates Database

### Steps:
1. After editing user (Test 12)
2. Note the edited name
3. Press F5 (reload page)
4. Find the user in table
5. Click their name
6. Check name in details
7. If it was your own account:
   - Logout
   - Login again
   - Check name everywhere

### ✅ Success Criteria:
- [ ] Edited name persists after reload
- [ ] Name in table matches edit
- [ ] Name in details matches edit
- [ ] If own account: survives logout/login
- [ ] Database contains updated name

### 📸 What you should see:
```
[After Edit]
Name changed to: EditedName Doe

↓ Press F5

[After Reload]
Name still: EditedName Doe ✓

↓ If own account: Logout → Login

[After Re-login]
Profile shows: EditedName Doe ✓
Users page shows: EditedName Doe ✓
Navigation shows: EditedName Doe ✓
```

---

## 🎬 Test 14: Can Add New User

### Steps:
1. On `/Users` page
2. Click "Add People" button (top right)
3. Modal appears
4. Fill out form:
   ```
   First Name: NewPerson
   Last Name: Test
   Username: newperson999
   Email: new999@test.com
   Password: pass123
   Role: Student
   ```
5. Click "Add User"
6. Modal closes
7. Find new user in table
8. Press F5
9. Check new user still there
10. Logout
11. Login as newperson999 / pass123

### ✅ Success Criteria:
- [ ] Modal appears with form
- [ ] All fields present
- [ ] Validation works
- [ ] New user appears immediately after save
- [ ] Modal closes automatically
- [ ] User persists after reload
- [ ] Can login as new user

### 📸 What you should see:
```
[Users Page]
[Add People] ← Click

↓

[Modal Dialog]
┌─────────────────────────────┐
│ Add New User            [X] │
├─────────────────────────────┤
│ First Name: [NewPerson]     │
│ Last Name: [Test]           │
│ Username: [newperson999]    │
│ Email: [new999@test.com]    │
│ Password: [pass123]         │
│ Role: [Student ▼]           │
│                             │
│ [Cancel] [Add User]         │
└─────────────────────────────┘

↓ Click Add User

[Users Table] - New user appears!
👤 John Doe
👤 Jane Smith
👤 NewPerson Test ← Just added!

↓ Reload page

[After Reload]
👤 NewPerson Test ✓ (still there!)
```

---

## 🎬 Test 15: Can Edit New User

### Steps:
1. After adding new user (Test 14)
2. Find "NewPerson Test" in table
3. Click their name
4. Details panel appears
5. Click "Edit User"
6. Change Last Name to "Modified"
7. Click "Save"
8. Press F5
9. Find user again
10. Click their name
11. Check Last Name

### ✅ Success Criteria:
- [ ] New user is clickable
- [ ] Details appear correctly
- [ ] Edit button works
- [ ] Can modify fields
- [ ] Save works
- [ ] Changes visible immediately
- [ ] Changes persist after reload

### 📸 What you should see:
```
[Users Table]
👤 NewPerson Test ← Click

↓

[Details Panel]
Name: NewPerson Test
[Edit User] ← Click

↓

[Edit Mode]
First Name: [NewPerson]
Last Name: [Test] ← Change to "Modified"
[Save]

↓ Click Save

[View Mode]
Name: NewPerson Modified ✓

↓ Press F5

[After Reload]
Click user → Name: NewPerson Modified ✓
Database updated successfully!
```

---

## ✅ All Tests Complete!

If all 15 tests passed, your implementation is complete and meets all rubric requirements.

### Final Verification:
- [ ] All 15 tests passed
- [ ] No console errors
- [ ] All features work smoothly
- [ ] Data persists across reloads
- [ ] Database operations successful

### Common Issues:
- **Can't login:** Check backend is running
- **Changes don't persist:** Check MongoDB connection
- **Can't access pages:** Make sure logged in first
- **Filters don't work:** Check search/role selectors

---

**Congratulations! Your A6 implementation is complete! 🎉**
