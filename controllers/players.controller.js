import Player from "../models/players.model.js";

const getAllPlayersData = async (req, res) => {

  // res.send({message:'hiii from server'})
  try {
    const allData = await Player.find();
    const jsonData = JSON.stringify(allData)

    res.json({
      data: allData,
      message: "all data retrieved",
      success: true,
    });
  } catch (error) {
    console.log(`fetch player data failed from db`);
    res.json({
      data: null,
      message: "failed to fetch data",
      success: false,
    });
  }
};

const createPlayerData = async (req, res) => {
  try {
    const { name, url, bio } = req.body;
    console.log(name,url,bio)

    if (!name || !url || !bio) {
      res.json({
        message: "please fill all data",
        success: false,
      });
      return;
    }

    const newData= new Player({name,url,bio})
    const saveresult=await newData.save()

    res.json({
        message: "add player successfully",
        success: true,
        
    })

  } catch (error) {
    console.log(`create player data failed ${error}`);
    res.json({
      message: "failed to add player",
      success: false,
    });
  }
};


const deletePlayerdata=async(req,res)=>{
    try {
        const{id}=req.params

        const findPlayer=await Player({_id:id})
        if(!findPlayer) return res.json({message:'something went wrong',success:false})

        const deleteResult=await Player.deleteOne({_id:id})

        res.json({
            message:'player deleted successfuuly',
            success:true
        })
        
    } catch (error) {
        res.json({
            message:'failed to delete player data',
            success:false
        })
        console.log(`delete player data failed ${error.message}`)
    }
}


export { getAllPlayersData,createPlayerData ,deletePlayerdata};
