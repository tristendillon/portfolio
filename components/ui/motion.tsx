"use client"

import React from 'react'
import { 
  motion, 
  AnimatePresence, 
  useScroll,
  useSpring, 
  useTransform 
} from 'framer-motion'

export const MotionDiv = motion.div
export const MotionSection = motion.section
export const MotionSpan = motion.span
export const MotionH1 = motion.h1
export const MotionH2 = motion.h2
export const MotionP = motion.p
export const MotionImg = motion.img
export const MotionA = motion.a

export { AnimatePresence, useScroll, useSpring, useTransform }