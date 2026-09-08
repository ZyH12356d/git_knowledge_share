# Git Conflict Scenario Guide

## Scenario 1: Simple Code Conflict

### Setup:
1. On **main branch**, modify `demo-code.js`:
   - Change version to '1.1.0'
   - Add a `removeUser()` method

2. On **feature-branch**, modify `demo-code.js`:
   - Change version to '2.0.0'
   - Add a `updateUser()` method

### Result: Conflict in version number and methods added in different locations

---

## Scenario 2: Configuration Conflict

### Setup:
1. On **main branch**, modify `demo-config.json`:
   - Change port to 3306
   - Set caching to true
   - Change timeout to 3000

2. On **feature-branch**, modify `demo-config.json`:
   - Change port to 8080
   - Set authentication to false
   - Change timeout to 10000

### Result: Multiple conflicts in configuration values

---

## Scenario 3: Documentation Conflict

### Setup:
1. On **main branch**, modify `demo-document.md`:
   - Add new section "Security"
   - Modify installation steps
   - Change license to Apache 2.0

2. On **feature-branch**, modify `demo-document.md`:
   - Add new section "Testing"
   - Modify installation steps differently
   - Change license to GPL

### Result: Conflicts in multiple sections

---

## Quick Command Reference

```bash
# Create and switch to feature branch
git checkout -b feature-branch

# Make changes and commit
git add .
git commit -m "Your message"

# Switch back to main
git checkout main

# Make conflicting changes and commit
git add .
git commit -m "Your message"

# Try to merge (creates conflict)
git merge feature-branch

# View conflict status
git status

# After resolving conflicts in files
git add <file>
git commit -m "Resolved conflicts"

# To abort merge
git merge --abort

# View differences
git diff
```

---

## Tips for Resolving Conflicts

1. **Understand both changes** - Read the code from both branches
2. **Communicate** - Talk to the other developer if possible
3. **Test after resolving** - Make sure the merged code works
4. **Use tools** - VS Code, GitKraken, or other merge tools can help
5. **Keep it simple** - Resolve one conflict at a time
