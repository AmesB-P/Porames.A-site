import resume from '../img/ResumeFront-end.png'
const showImg = ()=> {
    const onclick =() =>{
        <img src={resume}></img>
    }
    return(
        {onclick}
    )
}