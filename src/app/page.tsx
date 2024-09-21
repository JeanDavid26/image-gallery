import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id } className="flex w-48 flex-col">
          <Image src={image.url} alt={image.name} style={{ objectFit : 'contain'}} width={400} height={400}/> 
        </div>
      ))} 
    </div>
  )
}
export default async function  HomePage() {

  return (
    <main className="">
      <SignedOut>
       <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
        
         <Images />
        </div>
      </SignedIn>
      
    </main>
  );
}
