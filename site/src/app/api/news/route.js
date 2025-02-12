import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
  const { title, short_des, img1, img2, img3, img4, keywords, long_des, type, catID } = await request.json();

  try {
    const newNews = await prisma.news_list.create({
      data: {
        title,
        short_des,
        img1,
        img2,
        img3,
        img4,
        keywords,
        long_des,
        type,
        catID: parseInt(catID, 10),
      },
    });
    return new Response(JSON.stringify(newNews), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create news' }), { status: 500 });
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, short_des, img1, img2, img3, img4, keywords, long_des, type, catID } = req.body;

    try {
      const newNews = await prisma.news_list.create({
        data: {
          title,
          short_des,
          img1,
          img2,
          img3,
          img4,
          keywords,
          long_des,
          type,
          catID: parseInt(catID, 10),
        },
      });
      res.status(200).json(newNews);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create news' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 