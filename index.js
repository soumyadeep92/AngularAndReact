const getFullname=(fname,lname)=>{
    return `${fname} ${lname}`;
}
const actualName=getFullname("Bruce","Wayne");
const expectedName="BruceWayne";
if(expectedName!==actualName)
{
    throw new Error(`${actualName} is not equal to ${expectedName}`);
}