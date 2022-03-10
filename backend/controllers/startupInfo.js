import Startup from "../models/startupInfo.js";

export const getStartup = async(req, res) => {

    const {id} = req.params

    try {

        const findStartup = await Startup.find({id: id})

        if(!findStartup) {

            return res.status(404).json({message: 'The page you are looking for does not exist'})
        }

        res.status(200).json({body: findStartup})

    }catch(error) {

        res.status(404).json({
            message: "Something went wrong"
        })
    }

}

export const startup = async(req, res) => {

    const {name, description, imageUrl} = req.body

    try{

        const startup = await Startup.create({

            name: name,
            description: description,
            imageUrl: imageUrl
        })

        res.status(202).json({message: "Startup Registered Successfully"})

    }catch(error) {

        res.status(404).json({

            message: "Something went wrong"
        })
    }
}

