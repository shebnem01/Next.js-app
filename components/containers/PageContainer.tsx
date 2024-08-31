const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='sm:w-[100%-150px] w-[100%-120px] mx-auto sm:px-10 px-6'>{children}</div>
    )
}
export default PageContainer