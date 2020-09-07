import React from 'react'

const TitleH1 = (props) => {
    const ownCss = `p-3 m-3 bg-dark rounded text-center text-white`
    return (
        <>
            <h1 className={ownCss}>
                {props.children}
            </h1>
        </>
    )
}

export default TitleH1