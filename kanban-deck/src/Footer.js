import './styles.css';
function Footer(){
   return(
    <div className='footer'>
        <h2 className='activeF'>Active tasks: </h2>
        <h2 className='finishF'>Finished tasks: </h2>
        <h2 className='authorF'>Kanban board by alex, 2023</h2>
    </div>
   ) 
}
export default Footer;