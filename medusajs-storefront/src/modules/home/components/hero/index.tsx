import { ShoppingCartSolid } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { ModeToggle } from "components/toggle";
import Link from 'next/link'
const dotenv = require("dotenv");
const STORE = process.env.NEXT_PUBLIC_BASE_URL
const REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Are you looking for products for your family in Cuba?
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
           We have the solution
          </Heading>
        </span>
          <ModeToggle/>
        <Link  href={`${STORE}/${REGION}/store`}>
        <Button variant="secondary">
            <ShoppingCartSolid />
          Visit our store for Cuba
          </Button>
        </Link>
      </div>
    </div>
  )
}
// NEXT_PUBLIC_BASE_URL
export default Hero
