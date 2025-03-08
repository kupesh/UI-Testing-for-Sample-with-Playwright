# UI Testing for SingerSL with Playwright

This project contains automated UI tests for [Singer Sri Lanka](https://www.singersl.com) using Playwright. The test suite verifies the core functionality of the SingerSL website, including homepage elements, search functionality, navigation, banners, and product availability.

## 📌 **Project Structure**
```
playwright-singersl-tests/
│── tests/
│   ├── ui-tests.spec.js      # UI Test cases for SingerSL website
│   ├── API-tests.spec.js      # Sample API test case 
│── package.json              # Node.js dependencies
│── playwright.config.js      # Playwright configuration
│── README.md                 # Project documentation
```

## 🚀 **Getting Started**

### **1️⃣ Prerequisites**
- Install [Node.js](https://nodejs.org/)
- Install Git (if not installed already)
- A GitHub account

### **2️⃣ Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/playwright-singersl-tests.git
cd playwright-singersl-tests
```

### **3️⃣ Install Dependencies**
```sh
npm install
```

### **4️⃣ Install Playwright Browsers**
```sh
npx playwright install
```

---
## 🧪 **Running Tests**

### **Run All Tests**
```sh
npx playwright test
```

### **Run a Specific Test File**
```sh
npx playwright test tests/ui-tests.spec.js
npx playwright test tests/api-tests.spec.js
```

### **Run Tests in Headed Mode (Visible Browser)**
```sh
npx playwright test --headed
```

### **Run a Specific Test**
```sh
npx playwright test --grep "Verify the search bar is functional"
```

### **Run Tests in Debug Mode**
```sh
npx playwright test --debug
```

### **View Test Report**
```sh
npx playwright show-report
```
---
## 📜 **Test Cases Included**
✅ Verify homepage title
✅ Check if navigation menu is visible
✅ Test search bar functionality
✅ Ensure homepage banner is displayed
✅ Verify footer visibility
✅ Search for a product and check availability

---

## 🎯 **Next Steps**
- Add more test cases for cart functionality and checkout process.
- Integrate with CI/CD pipelines for automated testing.
- Improve selectors for dynamic elements.

---
## 📌 **Contributing**
Feel free to fork the repository, make improvements, and submit a pull request!

🚀 **Happy Testing!**

