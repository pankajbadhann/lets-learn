function Table() {
  return (
    <div className="table-container">
      <table>
        <caption className="text-2xl font-bold">HTML Table Properties</caption>
        <tr>
          <th>Property / Attribute</th>
          <th>Description</th>
        </tr>

        <tr>
          <td>border</td>
          <td>Sets the border thickness of the table.</td>
        </tr>

        <tr>
          <td>cellpadding</td>
          <td>Adds space between cell content and cell border.</td>
        </tr>

        <tr>
          <td>cellspacing</td>
          <td>Adds space between table cells.</td>
        </tr>

        <tr>
          <td>width</td>
          <td>Sets the width of the table.</td>
        </tr>

        <tr>
          <td>height</td>
          <td>Sets the height of the table.</td>
        </tr>

        <tr>
          <td>align</td>
          <td>Aligns the table (left, center, right).</td>
        </tr>

        <tr>
          <td>bgcolor</td>
          <td>Sets the background color of the table.</td>
        </tr>

        <tr>
          <td>colspan</td>
          <td>Merges multiple columns into one cell.</td>
        </tr>

        <tr>
          <td>rowspan</td>
          <td>Merges multiple rows into one cell.</td>
        </tr>

        <tr>
          <td>caption</td>
          <td>Adds a title/caption to the table.</td>
        </tr>

        <tr>
          <td>&lt;thead&gt;</td>
          <td>Defines the table header section.</td>
        </tr>

        <tr>
          <td>&lt;tbody&gt;</td>
          <td>Defines the table body section.</td>
        </tr>

        <tr>
          <td>&lt;tfoot&gt;</td>
          <td>Defines the table footer section.</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
