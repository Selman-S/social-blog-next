'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Post } from '@/types/types';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {




 return (
  <Card sx={{ maxWidth: 345 }}>
   <CardHeader
    avatar={
     <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
      <Image src={post.owner.picture} alt={post.owner.firstName} width={40} height={40} />
     </Avatar>
    }
    action={
     <IconButton aria-label="settings">
      <MoreVertIcon />
     </IconButton>
    }
    title={post.owner.firstName + ' ' + post.owner.lastName}
    subheader={post.publishDate}
   />
   <Image
    src={post.image}
    width={345}
    height={200}
    alt={post.text}
   />
   <CardContent>
    <Typography variant="body2" color="text.secondary">
     {post.text}
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
    <Link href={`/posts/${post.id}`}>
     Düzenle
    </Link>
    <Button size="small" color="secondary">
     Sil
    </Button>

   </CardActions>

  </Card >
 );
}