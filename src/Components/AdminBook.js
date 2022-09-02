import "../Css/AdminBook.css"

export default function AdminBook() {
    return (<>
        <div id="admin-book" className="">
            <div id="admin-book-img" className="inline-block">img</div>
            <div id="admin-book-info" className="inline-block">

                BookID:<label>BookId</label> <br/>
                Active:<label>Active Status</label><br/>
                ISBN:<label>ISBN Number</label><br/>
                Name:<label>BookName</label><br/>
                Author:<label>AuthorName</label><br/>
                Description:<label>Description</label><br/>
                Page Size:<label>Page Size</label><br/>



            </div>
        </div>

    </>)
}