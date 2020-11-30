import React from 'react'; 

export default function LinkTime(props) {

    const displayLinks = (props) => {
        const { mylinks } = props;

        if (mylinks.length > 0) {
            return (
                mylinks.map((mylink, index) => {
                    console.log(mylink);
                    return (
                        <div class='mylink' key={mylink._id}>
                            <p class="links"> {mylink.links} </p>
                            <div class="ID"> {mylink.adminId} </div>
                            </div >
                    )
                })
            )

        } else {
           return <div> no </div>
        }
    }

    return (

        <>
            <h3> {displayLinks(props)} </h3>

        </>
    );
}