<?php
//$this->extend('/Layout/default');

$this->assign('title', " Order Roster");
$this->Html->css("//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css", ['block' => true, 'id' => 'bootstrap-css']);
$this->Html->script ("//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js", ['block' => true]);
$this->Html->script ("//code.jquery.com/jquery-1.11.1.min.js", ['block' => true]);

?>

<h1>Order Roster</h1>
<br/>
<p>
<div class="row">
	<input type="hidden" name="count" value="1" />
	<div class="control-group" id="fields">
		<label class="control-label" for="field1">Nice Multiple Form Fields</label>
		<div class="controls" id="profs">
			<form class="input-append">
				<div id="field">
					<input autocomplete="off" class="input" id="field1" name="prof1" type="text" placeholder="Type something" data-items="8"/>
					<button id="b1" class="btn add-more" type="button">+</button>
				</div>
			</form>
			<br>
			<small>Press + to add another form field :)</small>
		</div>
	</div>
</div>
</p>

<br><br>
<style>
	* {
		box-sizing: border-box;
	}

	/* Create four equal columns that floats next to each other */
	.column {
		float: left;
		width: 25%;
		padding: 10px;
		height: 300px; /* Should be removed. Only for demonstration */
	}

	/* Clear floats after the columns */
	.row:after {
		content: "";
		display: table;
		clear: both;
	}
</style>
<h2>Four Equal Columns</h2>

<div class="row">
	<div class="column" style="background-color:#aaa;">
		<h2>Column 1</h2>
		<p>Some text..</p>
	</div>
	<div class="column" style="background-color:#bbb;">
		<h2>Column 2</h2>
		<p>Some text..</p>
	</div>
	<div class="column" style="background-color:#ccc;">
		<h2>Column 3</h2>
		<p>Some text..</p>
	</div>
	<div class="column" style="background-color:#ddd;">
		<h2>Column 4</h2>
		<p>Some text..</p>
	</div>
</div>


<div id="stylized" class="myform">
	<form id="form" name="form" method="post" action="index.html">
		<h1>Data</h1>
		<div class="column">
			<label>Name: </label>
			<input type="text" name="name" id="name"/>
		</div>
		<div class="column">
			<label>Email: </label>
			<input type="text" name="email" id="email"/>
		</div>
		<div class="column">
			<label>Password: </label>
			<input type="text" name="password" id="password"/>
		</div>
		<div class="column">
			<label>tester: </label>
			<input type="text" name="tester" id="tester"/>
		</div>
		<button id="b1" class="btn add-more" type="button">+</button>
	</form>
</div>

<script type="text/javascript">$(document).ready(function(){
    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#field" + next;
        var addRemove = "#field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var fieldID = "#field" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });



});
</script>


<SCRIPT language="javascript">
    function addRow(tableID) {

        var table = document.getElementById(tableID);

        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);

        var colCount = table.rows[0].cells.length;

        for(var i=0; i<colCount; i++) {

            var newcell	= row.insertCell(i);

            newcell.innerHTML = table.rows[0].cells[i].innerHTML;
            //alert(newcell.childNodes);
            switch(newcell.childNodes[0].type) {
                case "text":
                    newcell.childNodes[0].value = "";
                    break;
                case "checkbox":
                    newcell.childNodes[0].checked = false;
                    break;
                case "select-one":
                    newcell.childNodes[0].selectedIndex = 0;
                    break;
            }
        }
    }

    function deleteRow(tableID) {
        try {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;

            for(var i=0; i<rowCount; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[0].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    if(rowCount <= 1) {
                        alert("Cannot delete all the rows.");
                        break;
                    }
                    table.deleteRow(i);
                    rowCount--;
                    i--;
                }


            }
        }catch(e) {
            alert(e);
        }
    }

</SCRIPT>

<INPUT type="button" value="Add Row" onclick="addRow('dataTable')" />

<INPUT type="button" value="Delete Row" onclick="deleteRow('dataTable')" />

<TABLE id="dataTable" width="350px" border="1">
	<TR>
		<TD><INPUT type="checkbox" name="chk"/></TD>
		<TD><INPUT type="text" name="txt"/></TD>
		<TD>
			<SELECT name="country">
				<OPTION value="in">India</OPTION>
				<OPTION value="de">Germany</OPTION>
				<OPTION value="fr">France</OPTION>
				<OPTION value="us">United States</OPTION>
				<OPTION value="ch">Switzerland</OPTION>
			</SELECT>
		</TD>
	</TR>
</TABLE>

