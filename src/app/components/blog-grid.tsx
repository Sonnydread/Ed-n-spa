import Image from 'next/image'

export default function BlogGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-11">
      <div className="flex flex-col justify-between">
        <Image
          src="/img/candidates/blog-street.png"
          alt="Street"
          width={500}
          height={300}
          className="mb-4"
        />
        
        <Image
          src="/img/candidates/blog-building.png"
          alt="building"
          width={500}
          height={300}
          className="mt-4"
        />
      </div>
      <div>
        <Image
          src="/img/candidates/blog-night.png"
          alt="night"
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
