import React from 'react'; 

export default function LinkTime(props) {

    const displayLinks = (props) => {
        const { mylinks } = props;

        if (mylinks.length > 0) {
            return (
                mylinks.map((mylink) => {
                    console.log(mylink);
                    return (
                        <a href="links" >
                            <div class='mylink' key={mylink._id}>
                                <p class="links"> {mylink.links} </p>
                            </div >
                            </a>
                    )
                })
            )

        } else {
           return <div> Waiting for links...</div>
        }
    }

    return (

        <>
            <h3> {displayLinks(props)} </h3>

        </>
    );
}
