import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import GroupReg from './components/GroupReg';
import Groups from './components/Groups';
import TopicReg from './components/TopicReg';



export default function App() {
  return (
    <div className="App">
        <Router>

        <Routes>
    
   <Route path="/" element={<GroupReg/>}></Route>
   <Route path="/groups" element={<Groups/>}></Route>
   <Route path="/topicReg" element={<TopicReg/>}></Route>


    
   </Routes>

</Router>
</div>
);
}