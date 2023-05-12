import './styles.css'
import foto from './user-avatar.png'
import Profilemenu from './profile-menu';
function Board(){
return(
    <div className='head'>
        <h1 className='h1'>Awesome Kanban Board</h1>
        <img src={foto}  alt='profile-foto' className='profile-foto'/>
        <Profilemenu/>
    </div>

)
};
export default Board;