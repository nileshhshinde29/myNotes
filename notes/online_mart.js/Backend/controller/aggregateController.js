
const AggregateDB = require('../model/aggrigationSchema')

const aggregateFunction = async (req, res) => {
    try {
        /* const categories = await AggregateDB.aggregate([{
            $match: {
                // gender: "male"
                

            }
        },
        
        ]) */
        const categories = await AggregateDB.aggregate([
            // {$group: { _id: "$age", names: { $push: "$name" } }}  //group creates a group based on given property.
            // {$group: { _id: "$age", wholeDoc: { $push: "$$ROOT" } }  // $$ROOT is generally use for push whole document
            // { $match: { gender: 'female' } }, { $group: { _id: '$age', countOfNumberOfFieldS: { $sum: -1 } }, }, { $sort: { countOfNumberOfFieldS: 1 } }, { $group: { _id: null, maxGroup: { $max: "$countOfNumberOfFieldS" } } }
            // { $group: { _id: "$age", tags: { $push: '$tags' } } }, { $unwind: "$tags" } // unwind used to unwind nested array in single array
            // { $group: { _id: null, averageAge: { $avg: "$age" } } } // group id null groups all object
            // { $group: { _id: null, count: { $sum: { $size: { $ifNull: ["$tags", []] } } } } } // if null is used when fields absents.
            // { $unwind: "$tags" }, { $group: { _id: null, allTags: { /* $push */ $addToSet: "$tags" }, count: { $sum: 1 } } }, // add to set is used for remove repeated elements from array.
            {
                $group: {
                    _id: null,
                    avgScore: {
                        $push: {
                            $avg: {
                                $filter: {
                                    input: "$score",
                                    as: "score",
                                    cond: { $gt: ["$age", 20] }
                                }
                            }
                        }
                    }
                }
            }
        ])

        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json(error);
    }


    // console.log(req.user);
    // const contacts = await Contact.find()
    // res.status(200).json(contacts);
}

module.exports = { aggregateFunction }
/*
collection(pipeLine , option)

*/