import { Button } from "antd";

function Egbutton(props:any){
    const cssStyle = {padding:'10px 20px',borderRadius:'10px',backgroundColor:props.type==='primary'?'blue':''}
    return <button style={cssStyle}>{props.children}</button>

}



function Home(){
    return <div>
    <Button type='primary'>我是按钮</Button>
    <Egbutton type=''> </Egbutton>
     Home component
    </div>

}

export default Home;