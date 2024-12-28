const queries = {
    getAllSuppliers: `
      SELECT supplierID, fName,lname,firstAddress,secondAddress,mobileNumber,employeeID
      FROM Supplier;
    `,
  };
  
module.exports = queries;
  