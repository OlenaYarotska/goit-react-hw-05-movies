import { Oval } from 'react-loader-spinner';


export const Loader = () => {
    return (
  <div>
<Oval
  ariaLabel="loading-indicator"
  height={100}
  width={100}
  strokeWidth={5}
  strokeWidthSecondary={1}
  color="black"
  secondaryColor="white"             
/>
</div>
    )
   
};