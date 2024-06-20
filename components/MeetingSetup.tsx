import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { useCallStateHooks } from '@stream-io/video-react-sdk';



const MeetingSetup = ({setIsSetupComplete}:{setIsSetupComplete:(value:boolean)=>void}) => {
    
    const [isMicCamToggled, setIsMicCamToggled] = useState(false);
    const [isMicCam, setIsMicCam] = useState(false);
    const [btnmessage, setBtnmessage] = useState('Join with mic and camera on');
    const { useCameraState,useMicrophoneState } = useCallStateHooks();
    const { camera } = useCameraState();
    const { microphone } = useMicrophoneState();
    const call = useCall();
    if (!call) {
        throw new Error(
          'useStreamCall must be used within a StreamCall component.',
        );
      }
    // useEffect(() => {
    //     if (isMicCamToggled) {
    //       call?.camera.disable();
         
    //       call?.microphone.disable();
    //     } else {
    //       call?.camera.enable();
          
    //       call?.microphone.enable();
    //     }
    
    //   }, [isMicCamToggled, call?.camera, call?.microphone]);
    const eventhandler=async()=>{
      await camera.toggle();
      await microphone.toggle();
      setIsMicCam((prev)=>!prev);
      if(isMicCam){
      setBtnmessage('Join with mic and camera on');
      }else{
        setBtnmessage('Join with mic and camera off');

      }
    }
    


    return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <Button onClick={eventhandler} className='rounded-md bg-blue-500 px-4 py-2.5'>{btnmessage}</Button>
          {/* <input
            type="checkbox"
            checked={isMicCamToggled}
            // onChange={(e) => setIsMicCamToggled(e.target.checked)}
            
          />
          Join with mic and camera off */}
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500  py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
    
  
}

export default MeetingSetup