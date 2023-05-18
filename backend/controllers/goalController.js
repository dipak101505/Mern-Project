const asyncHandler = require('express-async-handler')

//@desc Get goal
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({ message : 'Get goals'})
})

//@desc Set goal
//@route Set /api/goals
//@access Private
const setGoals = asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(401)
        throw new Error('Please add text field')
    }
    res.status(200).json({ message: 'Set goals'})
})
//@desc Update goal
//@route PUT /api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({ message: `Update goals ${req.params.id}`})
})
//@desc Delete goal
//@route Delete /api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req,res)=>{
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}