import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0.02)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
           if (!animated) {
              setAnimated(true)
              let currScale = scale 
              const interval = setInterval(() => {
                  currScale += scGap 
                  setScale(currScale)
                  if (currScale > 1) {
                      setScale(0)
                      setAnimated(false)
                      clearInterval(interval)
                  }
              }, delay)
           }
        }
    }
}

export const useDimension = () => {
  
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    const position = 'absoulte'
    const background = 'indigo'
    const r = Math.min(w, h) / 10
    return {
        parentStyle() {
            const left = `${w / 2}px`
            const top = `${h / 2}px`
            const WebkitTransform = `rotate(${90 * sf2}deg)`
            return {position, left, top, WebkitTransform}
        },

        ballStyle() {
            const top = `${-r}px`
            const left = `${-r}px`
            const width = `${2 * r}px`
            const height = `${2 * r}px`
            return {top, left, position, width, height, background}            
        },

        lineStyle(i) {
            const top = `${-r}px`
            const left = `${-r + 2 * r * i}px`
            const width = `${2 * r}px`
            const height = `${r / 10}px`
            return {poisition, width, height, left, top, background}
        }
    }
}