export default function Mycom(){
    return(
        <h1>this is mycomponent</h1>
    );
}


function Compone(){
    return(
        <>
        {/* <Second/> */}
        <h2>this is comp one</h2> 
        </>
    );
}


function Comptwo(){
    return(
        <>
            <h3>this is comp two</h3>
        </>
    );
}


function Add(){
    return(
        <>
        <Comptwo />
        <h4>this is add comp</h4>
        </>
    );
}


export {Compone,Add};