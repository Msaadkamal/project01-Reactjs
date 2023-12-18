import styles from'./Button.module.css';
const Button=({onButtonclick})=>{
  const buttoncontainer=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return <div className={styles.butttonCotainer}>
      {buttoncontainer.map( item =>{
        return <button  onClick={()=> onButtonclick(item)} className={styles.buttton}>{item}</button>})} 

      




    </div>

}
export default Button;