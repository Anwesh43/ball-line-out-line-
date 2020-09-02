import React from 'react'
import {useStyle} from './hooks'

const StyledDiv = ({style}) => {
    return <div style = {style}></div>
}

const Ball = ({w, h, scale}) => {
    const {ballStyle} = useStyle(w, h, scale)
    return <StyledDiv style = {ballStyle}>
    </StyledDiv>
}

const Line = ({i, w, h, scale}) => {
    const {lineStyle} = useStyle(w, h, scale) 
    return <StyledDiv style = {lineStyle(i)}>
    </StyledDiv>
}

const BallLineOutLine = ({w, h, scale, onClick}) => {
    const {parentStyle} = useStyle(w, h, scale)
    return <div onClick = {onClick} style = {parentStyle}>
        <Ball w = {w} h = {h} scale = {scale}/>
        {[0, 1].map(i => (<Line i = {i} key = {`line_${i}`} w = {w} h = {h} scale = {scale}/>))}
    </div>
}

export default BallLineOutLine