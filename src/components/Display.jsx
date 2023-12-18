import styles from './Display.module.css'
const Display=({DisplayValue})=>{
    return <input value= {DisplayValue}  className={styles.display} type="text"  readOnly/>
    
}
export default Display;