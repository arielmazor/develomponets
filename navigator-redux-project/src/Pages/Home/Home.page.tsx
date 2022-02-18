import React from 'react';
import ReactDOM from 'react-dom';
import './_home.scss'
import List from 'components/List/List.component';
import StudentsProvider from 'Providers/Students/Students.provider'
import Counter from 'components/Counter/Counter';
const Home = () => {
  return ( 
      <div className="home f-c">
        <StudentsProvider>
          <Counter />
        </StudentsProvider>
      </div>
  );
}

export default Home;