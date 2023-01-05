import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import InfoModal from '../InfoModal'
import { ADemocraticCoalitionOfChange, BuildingMomentum, CommnicationOfAVision, InitiatingUrgency, InstitutionalizingChange, Overview, References } from './Constants'

function Welcome() {

    const mainStages = ['Unfreezing', 'Changing', 'Refreezing']

    const subStages = [{Name : 'Overview', Color : '#AF50FF', Count : 3},
                        {Name : 'Initiating Urgency', Color : '#FF685F', Count : 4},
                        {Name : 'A democratic coalition of change', Color : '#00BEFF', Count : 5},
                        {Name : 'Communication of a vision', Color : '#FF3E0D', Count : 4},
                        {Name : 'Building momentum ', Color : '#FD9540', Count : 8},
                        {Name : 'Institutionalizing Change ', Color : '#00D37E', Count : 6},
                        {Name : 'References', Color : '#F5F5F5', Count : 1},
                        ]

    const substageDescriptions = ['Recognizing the decrease in performance of Q4 2022 and that a return to office is a key solution that will benefit the productivity of Ithaca and it’s long term bottom line. ',
    'Building a board of change agents that represents key stakeholders of Ithaca who can demonstrate leadership in the workforce transition. ',
    'A shared vision that will align Ithaca', 'Using short term gains to support the vision empirically and to build momentum against long term obstacles ', 'Consolidating the retrospective advantages gained so far to create long lasting impact']

    const TimeLineBlock = ({color}) => {
        return(
            <div className='timelineBlock' style = {{background : color}}>
            </div>
        )
    }

    const [currentStage, setCurrentStage] = useState(<Overview />)
    const [infoModalOpen, setInfoModalOpen] = useState(false);

    const handleStageChange = (stage) => {
        
        switch (stage){
            case 'Overview':
                setCurrentStage(<Overview />)
                break
            case 'Initiating Urgency':
                setCurrentStage(<InitiatingUrgency />)
                break
            case 'A democratic coalition of change':
                setCurrentStage(<ADemocraticCoalitionOfChange />)
                break
            case 'Communication of a vision':
                setCurrentStage(<CommnicationOfAVision />)
                break
            case 'Building momentum ':
                setCurrentStage(<BuildingMomentum />)
                break
            case 'Institutionalizing Change ':
                setCurrentStage(<InstitutionalizingChange />)
                break
            case 'References':
                setCurrentStage(<References />)
                break
        }
    }

    useEffect(()=> {
        setInfoModalOpen(true)
    }, [currentStage])


  return (
    <>
    <Box sx = {{display : 'flex', flexDirection : 'row'}}>
        <Box className='home-header'>
            <Typography variant='h5' sx = {{marginBottom : '200px'}}>Ithaca Inc.</Typography>
            <Typography variant='h3'sx ={{fontWeight : '700', marginBottom : '200px'}}>The move to back in office.</Typography>
            <Typography variant='body'>Navigate by clicking on a part of the timeline</Typography>
        </Box>
        <Box className='home-timeline'>
            <Box className='main-stages'>
                {
                    mainStages.map(stage => {
                        return(
                            <Box key = {`${stage}-box`}>
                                {stage}
                            </Box>    
                        )
                    })
                }
            </Box>

            <Box className='substages'>
                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange('Overview')}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[0].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[0].Color}  key = {`${n}${subStages[0].color}`} />
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[0].Color} sx = {{width : '50%'}}>{subStages[0].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[1].Name)}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[1].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[1].Color}   key = {`${n}${subStages[1].color}`}/>
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[1].Color} sx = {{width : '50%'}}>{subStages[1].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[2].Name)}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[2].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[2].Color} key = {`${n}${subStages[2].color}`}  />
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[2].Color} sx = {{width : '50%'}}>{subStages[2].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[3].Name)}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[3].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[3].Color}  key = {`${n}${subStages[3].color}`} />
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[3].Color} sx = {{width : '50%'}}>{subStages[3].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[4].Name)}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[4].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[4].Color}   key = {`${n}${subStages[4].color}`}/>
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[4].Color} sx = {{width : '50%'}}>{subStages[4].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[5].Name)}}> 
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[5].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[5].Color}  key = {`${n}${subStages[5].color}`} />
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[5].Color} sx = {{width : '50%'}}>{subStages[5].Name}</Typography>
                </Box>

                <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage' onClick = {()=> {handleStageChange(subStages[6].Name)}}>
                    <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}}>
                        {   
                            [...Array(subStages[6].Count)].map(n =>{
                                return(
                                    <TimeLineBlock color = {subStages[6].Color}   key = {`${n}${subStages[6].color}`} />
                                )
                            })
                        }
                    </Box>
                    <Typography variant='subtitle1' color = {subStages[6].Color} sx = {{width : '50%'}}>{subStages[6].Name}</Typography>
                </Box>

            </Box>

        </Box>
    </Box>
    <InfoModal component={currentStage} open = {infoModalOpen} handleClose = {()=> {setInfoModalOpen(false)}} />
    </>
  )
}

export default Welcome

{/* <Box className='substages'>
{
    subStages.map(stage => {
        return(
            <Box sx = {{display : 'flex', justifyContent: 'space-around', alignItems: 'center', width : '100%', margin: '2%'}} className = 'substage-stage'>
            <Box sx = {{display : 'flex', flexDirection: 'column', justifyContent : 'flex-start'}} id = {`timeline-${stage.Name}`}>
                {   
                    [...Array(stage.Count)].map(n =>{
                        return(
                            <TimeLineBlock color = {stage.Color}  />
                        )
                    })
                }
            </Box>
            <Typography variant='subtitle1' color = {stage.Color} sx = {{width : '50%'}}>{stage.Name}</Typography>
        </Box>
        )
    })
}
</Box> */}