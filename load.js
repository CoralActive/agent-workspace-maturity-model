
$(function () {
  const header = `
      <thead>
        <tr>
          <th class="blank"></th>
          <th class="patchwork">
            Patchwork
          </th>
          <th class="integrated">
           Integrated 
           <div class="subheading"> (Patchwork +)</div>
          </th>
          <th class="unified">    
            Unified 
            <div class="subheading"> (Integrated +)</div> 
          </th>
          <th class="composable"> 
            Composable 
            <div class="subheading"> (Unified +)</div>
          </th>
        </tr>
      </thead>
    `;

  function ul(arr) {
    return "<ul>" + arr.map(text => `<li>${text}</li>`).join("") + "</ul>"
  }


  const body = $("<tbody>").append(
    Object.keys(modelData).map(row => {
      return $("<tr>")
        .append($("<td>").append(row))
        .append($("<td>").append(ul(modelData[row][0])))
        .append($("<td>").append(ul(modelData[row][1])))
        .append($("<td>").append(ul(modelData[row][2])))
        .append($("<td>").append(ul(modelData[row][3])))
    })
  )

  const caption = $(`
      <caption>
        <div style="float: left">Ed 1.0</div>

        <vdiv style="float: center">
        Customer-facing employee workspace maturity model 
        is openly licensed via <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons BY 4.0</a>.
        </div>

        <vdiv style="float: right">
        <a href="https://www.coralactive.com" target="_blank">&copy; 2024 Coral Active</a>
        </span>
      </caption>
    `)

  const table = $("<table>")
    .append(caption)
    .append(header)
    .append(body)

  $("#maturity-model").append(table)
});
