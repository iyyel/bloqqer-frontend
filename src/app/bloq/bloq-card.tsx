'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

export const BloqCard = ({ bloq }: { bloq: BloqMetadata }) => {
  return (
    <Card className="max-w-[24rem] overflow-hidden rounded-none shadow-none border-solid border-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none" children={undefined} />
      {/* <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        /> */}

      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {bloq.title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {bloq.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content={bloq.authorName}>
            <Avatar
              size="sm"
              variant="circular"
              alt={bloq.authorName}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal">{bloq.published ? bloq.published.toString() : ""}</Typography>
      </CardFooter>
      <Link href={`/bloq/${bloq.id}`}>
        <Button variant="gradient">View</Button>
      </Link>
    </Card>
  );
}