'use client';

import useToast from '@common-design/hooks/useToast';

export default function Home() {
  const { open } = useToast({
    message: 'Hello, world!',
    options: {
      type: 'success',
    },
  });

  return <main>123</main>;
}
