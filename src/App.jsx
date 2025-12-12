import { useState } from 'react';  // Add this line
import { Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home';
import UserView from './views/User';
import AdminView from './views/Admin';
import Owner from './views/Owner';
import './index.css';// Make sure this imports Tailwind's base styles

function App() {
  const [employees, setEmployees] = useState([
    { name: 'Marvin Abernathy', lastname: 'Lynch', position: 'Legacy Factors Manager', id: '9' },
    { name: 'Dr. Otis Bernhard', lastname: 'Robel', position: 'Regional Accountability Facilitator', id: '10' }
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, { ...newEmployee, id: (employees.length + 1).toString() }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-500 text-black font-bold text-2xl shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 justify-items-end justify-between items-center">
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-200 transition-colors justify-end">Home</Link>
            <Link to="/owner" className="hover:text-blue-200 transition-colors justify-end">Owner</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/user" 
            element={<UserView employees={employees} />} 
          />
          <Route 
            path="/admin" 
            element={
              <AdminView 
                employees={employees} 
                onAddEmployee={addEmployee}
                onDeleteEmployee={deleteEmployee}
              />
            } 
          />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;