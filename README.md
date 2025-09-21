# JavaScript Basics - Practical Exercises

This project contains introductory JavaScript exercises to practice working with **variables, data types, user input, and basic calculations**.  
It is part of the `alx_front_end_2025` program.

---

## 📘 Exercises

### **Exercise 1: Working with Variables and Data Types**
Create a script that declares and initializes variables of different data types.  
Then, use `console.log` to print each variable's value and type.

#### Steps:
1. **Declare and Initialize Variables**
   - `name` → string (your name)
   - `age` → number (your age)
   - `isStudent` → boolean (true/false if you are a student)
   - `address` → object (with `city` and `country`)
   - `hobbies` → array (your hobbies)
   - `undefinedVariable` → declared but not initialized
   - `nullVariable` → explicitly set to `null`

2. **Print Variables and Their Types**
   - Use `console.log()` for value
   - Use `typeof` to print the type

---

### **Exercise 2: Calculate Year of Birth**
Write a script that prompts the user for their **name** and **age**, then calculates and alerts the year they were born.

#### Steps:
1. **Prompt for Input**
   - `userName` → from `prompt("Enter your name:")`
   - `userAge` → from `prompt("Enter your age:")`

2. **Calculate Year of Birth**
   - Use `new Date().getFullYear()` to get the current year
   - Subtract `userAge` to get `yearOfBirth`

3. **Display Result**
   - Use `alert()` → `"Hello <userName>, you were born in <yearOfBirth>"`

---

## ⚙️ How to Run (Windows CMD / Git Bash)
1. Clone this repository:
   ```bash
   git clone https://github.com/Tusneld/alx_front_end_2025.git
