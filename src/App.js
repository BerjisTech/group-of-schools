import logo from './logo.svg';
import './App.css';
import AIModule from './modules/ai/AIModule';
import CoursesModule from './modules/courses/CoursesModule';
import DiyModule from './modules/diy/DiyModule';
import DonationsModule from './modules/donations/DonationsModule';
import ExamsModule from './modules/exams/ExamsModule';
import ForumsModule from './modules/forums/ForumsModule';
import LibraryModules from './modules/library/LibraryModule';
import NLIVModules from './modules/nliv/NLIVModule';
import SchoolsModules from './modules/schools/SchoolsModule';
import SuppliersModule from './modules/suppliers/SuppliersModule';
import UsersModule from './modules/user/UsersModule';

function App() {
  return (
    <div>
      <AIModule />
      <CoursesModule />
      <DiyModule />
      <DonationsModule />
      <ExamsModule />
      <ForumsModule />
      <LibraryModules />
      <NLIVModules />
      <SchoolsModules />
      <SuppliersModule />
      <UsersModule />
    </div>
  );
}

export default App;
