import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import BallLineOutLine from './BallLineOutLine'

const BLOLContainer = (props) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <div>
        <BallLineOutLine w = {w} h = {h} scale = {scale} onClick = {start}/>
    </div>
}

export default BLOLContainer