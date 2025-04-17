export default function GridBackground() {
  return (
    <div className='absolute inset-0 z-10'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: '52px 48px',
          opacity: 0.1,
        }}
      />
    </div>
  );
}
