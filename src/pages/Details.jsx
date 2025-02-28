const Details = () => {
    return (
        <div className="flex flex-col min-h-screen p-1 border-[10px] border-gray-900 border-t-0 bg-gray-50">
            {/* Placeholder for Slideshow - 200px Height */}
            <div 
                className="h-[200px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}
            ></div>

            {/* Main Content */}
            <div className="w-full p-5 text-left bg-white rounded-lg shadow-md mt-2">
                <h1 className="pt-2 text-2xl font-bold text-gray-900">Welcome to the Details Page</h1>
                <h2 className="mt-4 text-xl font-semibold text-gray-900">Explore our content</h2>
                <p className="mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tincidunt ex. 
                    Vivamus scelerisque odio in ligula luctus, id bibendum erat feugiat. 
                    Sed et venenatis tortor, nec hendrerit lacus.
                </p>
                <p className="mt-2 text-gray-700">
                    Fusce suscipit diam vel libero pharetra, sit amet tincidunt ipsum scelerisque. 
                    Integer ullamcorper nunc eget dolor eleifend, eget lacinia erat imperdiet. 
                    Vestibulum non tortor nec risus vestibulum egestas.
                </p>
                <h2 className="mt-6 text-xl font-semibold text-gray-900">Discover more</h2>
                <p className="mt-2 text-gray-700">
                    Curabitur imperdiet, nisi ac feugiat lacinia, ligula est ullamcorper velit, 
                    eget varius justo lorem id velit. Sed id libero vitae est pharetra dapibus.
                </p>
                <p className="mt-2 text-gray-700">
                    Aliquam erat volutpat. Morbi ac felis nec ipsum laoreet accumsan. 
                    Ut bibendum eros nec dolor varius, a dictum nisi feugiat.
                </p>
                <h2 className="mt-6 text-xl font-semibold text-gray-900">Discover more 2</h2>
                <p className="mt-2 text-gray-700">
                    Curabitur imperdiet, nisi ac feugiat lacinia, ligula est ullamcorper velit, 
                    eget varius justo lorem id velit. Sed id libero vitae est pharetra dapibus.
                </p>
                <p className="mt-2 text-gray-700">
                    Aliquam erat volutpat. Morbi ac felis nec ipsum laoreet accumsan. 
                    Ut bibendum eros nec dolor varius, a dictum nisi feugiat.
                </p>
            </div>
        </div>
    );
};

export default Details;
