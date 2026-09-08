# Step-by-Step Git Conflict Demo

Follow these steps to practice resolving git conflicts:

## Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit with demo files"
```

## Step 2: Create Feature Branch and Make Changes

```bash
# Create and switch to feature branch
git checkout -b feature-branch

# Now edit the files with "Feature Branch" changes
```

### Edit demo-code.js (Feature Branch):
- Change `this.version = '1.0.0';` to `this.version = '2.0.0';`
- Add this new method after `getAllUsers()`:
```javascript
    updateUser(id, name, email) {
        const user = this.getUser(id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            user.updatedAt = new Date();
        }
        return user;
    }
```

### Edit demo-config.json (Feature Branch):
- Change `"port": 5432,` to `"port": 8080,`
- Change `"timeout": 5000` to `"timeout": 10000`
- Change `"authentication": true,` to `"authentication": false,`

### Edit demo-document.md (Feature Branch):
- Change the License section from "MIT License" to "GPL License"
- Add a new section before License:
```markdown
## Testing

Run tests with:
```
npm test
```
```

### Commit Feature Branch:
```bash
git add .
git commit -m "Feature branch: version 2.0, updateUser method, new configs"
```

## Step 3: Switch to Main and Make Conflicting Changes

```bash
git checkout main
```

### Edit demo-code.js (Main Branch):
- Change `this.version = '1.0.0';` to `this.version = '1.1.0';`
- Add this new method after `getAllUsers()`:
```javascript
    removeUser(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.users.splice(index, 1)[0];
        }
        return null;
    }
```

### Edit demo-config.json (Main Branch):
- Change `"port": 5432,` to `"port": 3306,`
- Change `"timeout": 5000` to `"timeout": 3000`
- Change `"caching": false` to `"caching": true`

### Edit demo-document.md (Main Branch):
- Change the License section from "MIT License" to "Apache 2.0 License"
- Add a new section before License:
```markdown
## Security

Security features include:
- Encrypted passwords
- JWT authentication
- Rate limiting
```

### Commit Main Branch:
```bash
git add .
git commit -m "Main branch: version 1.1, removeUser method, updated configs"
```

## Step 4: Create the Conflict

```bash
git merge feature-branch
```

You should now see:
```
Auto-merging demo-document.md
CONFLICT (content): Merge conflict in demo-document.md
Auto-merging demo-config.json
CONFLICT (content): Merge conflict in demo-config.json
Auto-merging demo-code.js
CONFLICT (content): Merge conflict in demo-code.js
Automatic merge failed; fix conflicts and then commit the result.
```

## Step 5: View the Conflicts

```bash
git status
```

Open each file and look for conflict markers:
```
<<<<<<< HEAD
(main branch changes)
=======
(feature-branch changes)
>>>>>>> feature-branch
```

## Step 6: Resolve Each Conflict

For each file, decide:
- Keep main branch version
- Keep feature branch version
- Keep both (merge them)
- Write something new

Remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) after deciding.

## Step 7: Complete the Merge

```bash
git add .
git commit -m "Resolved merge conflicts between main and feature-branch"
```

## Step 8: Verify

```bash
git log --oneline --graph --all
```

---

## Alternative: Abort the Merge

If you want to start over:
```bash
git merge --abort
```








git remote add origin https://github.com/ZyH12356d/git_knowledge_share.git