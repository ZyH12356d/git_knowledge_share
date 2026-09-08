# Git Conflict Resolution Demo

This repository contains demo files to practice resolving git merge conflicts.

## Setup Instructions

### 1. Initialize the repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a conflict scenario

#### Step A: Create feature branch
```bash
git checkout -b feature-branch
```

#### Step B: Make changes on feature branch
Edit the files and commit:
```bash
git add .
git commit -m "Feature branch changes"
```

#### Step C: Go back to main and make conflicting changes
```bash
git checkout main
```
Edit the same lines in the files and commit:
```bash
git add .
git commit -m "Main branch changes"
```

#### Step D: Try to merge (this will create conflicts)
```bash
git merge feature-branch
```

### 3. Resolve the conflicts

When you see conflicts, git will mark them in the files like this:
```
<<<<<<< HEAD
Content from main branch
=======
Content from feature branch
>>>>>>> feature-branch
```

Edit the files to resolve conflicts, then:
```bash
git add <resolved-files>
git commit -m "Resolved merge conflicts"
```

## Demo Files Included

1. **demo-code.js** - JavaScript file with function conflicts
2. **demo-config.json** - Configuration file with setting conflicts
3. **demo-document.md** - Documentation file with content conflicts
