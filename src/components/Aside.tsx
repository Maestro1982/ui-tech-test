function Aside({ children }: { children?: React.ReactNode }) {
  return (
    <aside className='h-full border-l border-gray-200 w-1/6 px-4 py-10'>
      <h3 className='text-lg border-b border-gray-100'>Properties</h3>
      <div className='mt-2' />
      {children}
    </aside>
  );
}

export default Aside;
