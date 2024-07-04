export default function First(){
    return(
        <h2>this is first components</h2>
    );

}

function Second(){
    return(
        <>
            <h3>this is secod custom components</h3>
        </>
    );
}

function Third(){
    return(
        <h3>this is Third customcomp</h3>
    );
}


function Fourth(){
    return(
        <h3>this is Fourth components</h3>
    );
}


function Fifth(){
    return(
        <div>
        <Fourth/>
        <h3>this is Fifth components</h3>
        </div>
    );

}


export {Second,Third,Fifth};