<?php
//$this->extend('/Layout/default');

$this->assign('title', " Order Roster");
echo $this->Html->css('designer');
echo $this->Html->css('fonts');
echo $this->Html->script('designer');

?>

<div id="designer"><div id="placements_container"><div class="header">Locations</div><div class="placements_column"><div id="front" class="placement" data-placement="front" data-title="Front"><div class="placement_abbr">F</div><div class="placement_full">FRONT</div></div><div id="left_sleeve" class="placement" data-placement="left sleeve" data-title="Left Sleeve"><div class="placement_abbr">LS</div><div class="placement_full">LEFT<br>SLEEVE</div></div><div id="right_sleeve" class="placement" data-placement="right sleeve" data-title="Right Sleeve"><div class="placement_abbr">RS</div><div class="placement_full">RIGHT<br>SLEEVE</div></div><div id="back" class="placement active" data-placement="back" data-title="Back"><div class="placement_abbr">B</div><div class="placement_full">BACK</div></div></div></div>

	<div id="notice_container" style="display: none;">
		<div class="blocker"></div>
		<div class="container"></div>
	</div>

	<div id="context_menu"></div>

	<div id="placement_picker">
		<div class="label">Location</div>
		<div class="dropdown"></div>
	</div>
	<div id="canvas_loader" style="width: 222px; height: 222px; line-height: 222px; top: 113px; left: 179px; display: none;"><i class="fa fa-spinner fa-pulse" aria-hidden="true"></i></div>
	<div id="product_container" style="height: 518px; background-image: url(&quot;https://secure-cdn.logosoftwear.com/personalize/functions_image/bgimage_wrapper.php?placement_id=17272&amp;product_id=9935&amp;color=FFFFFF&amp;colorname=White&amp;designer_type=clipart&amp;width=300&amp;height=300&amp;pt=1460656424&amp;exp=691200&amp;new_designer=1&quot;);"><div class="canvas-container" style="width: 254px; height: 254px; position: relative; user-select: none; top: 98px; left: 164px; display: none;"><canvas id="front" class="front lower-canvas" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas><canvas class="upper-canvas front" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none; cursor: default;"></canvas></div><div class="canvas-container" style="width: 254px; height: 254px; position: relative; user-select: none; top: 239px; left: 0px; display: none;"><canvas id="left_sleeve" class="left_sleeve lower-canvas" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas><canvas class="upper-canvas left_sleeve" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas></div><div class="canvas-container" style="width: 254px; height: 254px; position: relative; user-select: none; top: 239px; left: 0px; display: none;"><canvas id="right_sleeve" class="right_sleeve lower-canvas" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas><canvas class="upper-canvas right_sleeve" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas></div><div class="canvas-container" style="width: 254px; height: 254px; position: relative; user-select: none; top: 74px; left: 159px; display: block;"><canvas id="back" class="back lower-canvas" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none;"></canvas><canvas class="upper-canvas back" width="254" height="254" style="position: absolute; width: 254px; height: 254px; left: 0px; top: 0px; user-select: none; cursor: pointer;"></canvas></div><div class="tag" id="price">$32.89</div></div>

	<div id="workbench_container">

		<div id="tab_container">
			<div id="templates_tab" class="tab">
				<div class="label">Templates<br>&amp; Roster</div>
				<div class="icon"><div class="glyph-jersey"></div></div>
			</div>
			<div id="edit_tab" class="tab active" style="">
				<div class="label">Edit<br>Template</div>
				<div class="icon"><div class="fa fa-pencil"></div></div>
			</div>
			<div id="text_tab" class="tab" style="display: none;">
				<div class="label">Add<br>Text</div>
				<div class="icon"><div class="fa fa-font"></div></div>
			</div>
			<div id="images_tab" class="tab">
				<div class="label">Add<br>Images</div>
				<div class="icon"><div class="fa fa-picture-o"></div></div>
			</div>
			<div id="product_tab" class="tab">
				<div class="label">Product<br>&amp; Color</div>
				<div class="icon">
					<div class="dropdown">
						<div class="swatch" style="border-color: rgb(40, 44, 46);"><div class="subswatch" style="background-color:#FFFFFF; width:100%"></div></div>
						<div class="fa fa-chevron-down"></div>
					</div>
				</div>
			</div>
			<div id="pricing_tab" class="tab">
				<div class="label">Pricing &amp; Checkout</div>
				<div class="icon"><div class="fa fa-usd"></div></div>
			</div>
		</div>

		<div id="tools_container">
			<div id="templates" class="tools" style="display: none;">
				<div class="header">Browse Templates</div>
				<div class="content">
					<div data-option="template_design" class="option">
						<div class="icon"><span class="fa fa-picture-o"></span></div>
						<div class="label">Design Templates</div>
					</div>
					<div data-option="template_sports" class="option">
						<div class="icon"><span class="glyph-basketball"></span></div>
						<div class="label">Sports Templates</div>
					</div>
					<div data-option="template_mascot" class="option" style="display: none;">
						<div class="icon"><span class="glyph-teddybear"></span></div>
						<div class="label">Mascot Templates</div>
					</div>
					<div data-option="template_wordart" class="option">
						<div class="icon"><span class="glyph-fontcase"></span></div>
						<div class="label">Wordart Templates</div>
					</div>
					<div data-option="template_roster" class="option" style="display: inline-block;">
						<div class="icon"><span class="glyph-jersey"></span></div>
						<div class="label">Roster Templates</div>
					</div>
					<div data-option="template_upload" class="option" style="display: none;">
						<div class="icon"><span class="fa fa-cloud-upload"></span></div>
						<div class="label">Upload My Logo</div>
					</div>
					<div data-option="edit_roster" class="option">
						<div class="icon"><span class="glyph-clipboardalt"></span></div>
						<div class="label">Edit My Roster</div>
					</div>
					<div data-option="template_saved" class="option">
						<div class="icon"><span class="fa fa-heart"></span></div>
						<div class="label">My Saved Designs</div>
					</div>
				</div>
			</div>

			<div id="edit" class="tools" style="display: block;">






				<div class="header">Edit Template</div><div class="block">
				<div class="piece" data-placement="back" data-index="1" data-photo="0" data-vsp="0">
					<div class="number" data-index="1">1</div>
					<input class="input text" data-index="1" type="text" maxlength="2" spellcheck="true" value="00"><div class="minitools" data-index="1"><div class="mini_picker" id="piece_0_swatch_1" data-swatch="1" style="width: 33.3333%;"><div class="swatch"><div data-hex="000000" data-swatch="1" class="magic swatch" style="background: none 0% 0% / auto;"><div class="subswatch" style="background-color:#000000; width:100%"></div></div></div></div><div class="glyph-font font" style="width: 33.3333%;"></div><div class="fa fa-trash-o remove" data-index="1" aria-hidden="true" style="width: 33.3333%;"></div></div></div>
				<div class="piece" data-placement="back" data-index="0" data-photo="0" data-vsp="0">
					<div class="number" data-index="0">2</div>
					<input class="input text" data-index="0" type="text" maxlength="40" spellcheck="true" value="PLAYER NAME"><div class="minitools" data-index="0"><div class="mini_picker" id="piece_0_swatch_0" data-swatch="0" style="width: 33.3333%;"><div class="swatch"><div data-hex="000000" data-swatch="0" class="magic swatch" style="background: none 0% 0% / auto;"><div class="subswatch" style="background-color:#000000; width:100%"></div></div></div></div><div class="glyph-font font" style="width: 33.3333%;"></div><div class="fa fa-trash-o remove" data-index="0" aria-hidden="true" style="width: 33.3333%;"></div></div></div>
				<div class="buttons">
					<button class="update primary magic big button"><span class="fa fa-refresh" aria-hidden="true"></span> Update Changes</button>
					<button class="roster secondary magic big button"><span class="glyph-clipboardalt"></span> Edit Names/Numbers</button>
					<button class="effects secondary magic big button"><span class="fa fa-paint-brush" aria-hidden="true"></span> Special Effects</button>
				</div>
			</div></div>

			<div id="text" class="tools" style="display: none;">
				<div class="header">Add Text</div>
				<div id="add_text_container">
					<textarea name="text" maxlength="40" id="textbox" placeholder="Text on back" style="height: 120px; border-radius: 3px;"></textarea>
					<button id="add_text" class="magic button primary big">Add Text</button>
					<div id="edit_existing" style="display: none;">Or edit existing text</div>
				</div>
				<div id="edit_text_container" style="display:none;">
					<div id="text_links">
						<div id="add_more" class="text_link"><span class="fa fa-plus-circle"></span> Add More</div>
						<div id="update_text" class="text_link"><span class="fa fa-refresh"></span> Update</div>
						<div id="delete_text" class="text_link"><span class="fa fa-trash"></span> Remove</div>
					</div>
					<div class="block">
						<div id="font_label" class="label">Font &amp; Color</div>
						<div id="font" class="picker">
							<div class="icon glyph-font"></div>
							<div class="label">Font Family</div>
							<div class="arrow"><span class="fa fa-chevron-down"></span></div>
						</div>
						<div id="text_color" class="picker">
							<div class="icon glyph-tint"></div>
							<div class="label">Text Color</div>
							<div class="arrow"><span class="fa fa-chevron-down"></span></div>
						</div>
					</div>
					<div class="block">
						<div id="alignment_label" class="label">Alignment</div>
						<div class="text_align">
							<div id="align_left" class="align"><span class="fa fa-align-left"></span></div>
							<div id="align_center" class="align"><span class="fa fa-align-center"></span></div>
							<div id="align_right" class="align"><span class="fa fa-align-right"></span></div>
						</div>
						<div id="text_align_to_center" class="alignh">
							<span class="fa fa-arrow-right"></span>
							<span class="label">Align To Center</span>
							<span class="fa fa-arrow-left"></span>
						</div>
					</div>
					<div class="block">
						<div id="layering_label" class="label">Layering</div>
						<div data-direction="backwards" class="layer">
							<span class="label">Move Backward</span>
							<span class="fa fa-step-backward fa-rotate-270"></span>
						</div>
						<div data-direction="forward" class="layer">
							<span class="label">Move Forward</span>
							<span class="fa fa-step-forward fa-rotate-270"></span>
						</div>
					</div>
					<div class="block">
						<div id="effects_toggle">Text Effects <span class="fa fa-plus-circle"></span></div>
						<div id="effects_container">
							<div class="special_effects_container">
								<div id="distress" class="effect" data-value="1">
									<div class="label">Distress</div>
									<div class="image"><img src="https://secure-cdn.logosoftwear.com/personalize/images_new/special_effects_thumbnails/distress.gif"></div>
								</div>
								<div id="metallic" class="effect" data-value="2">
									<div class="label">Metallic</div>
									<div class="image"><img src="https://secure-cdn.logosoftwear.com/personalize/images_new/special_effects_thumbnails/metallic.gif"></div>
								</div>
							</div>
							<div id="text_shapes_container">
								<div id="straight" class="text_shape"><img src="https://secure-cdn.logosoftwear.com/personalize/textshapes/straight.gif"></div>
								<div id="vertical_arch_v" class="text_shape"><img src="https://secure-cdn.logosoftwear.com/personalize/textshapes/vertical_arch.gif"></div>
								<div id="bridge_v" class="text_shape"><img src="https://secure-cdn.logosoftwear.com/personalize/textshapes/bridge.gif"></div>
								<div id="double_bridge_v" class="text_shape"><img src="https://secure-cdn.logosoftwear.com/personalize/textshapes/double_bridge.gif"></div>
								<div id="reversearch_v" class="text_shape"><img src="https://secure-cdn.logosoftwear.com/personalize/textshapes/reverse_arch.gif"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="images" class="tools" style="display:none;">
				<div class="header">Add An Image</div>
				<div class="main">
					<div id="upload" data-option="upload" class="option">
						<div class="icon"><span class="fa fa-cloud-upload"></span></div>
						<div class="label">Upload My Image</div>
					</div>
					<div id="clipart" data-option="clipart" class="option">
						<div class="icon"><span class="fa fa-picture-o"></span></div>
						<div class="label">Browse Clipart</div>
					</div>
					<div id="saved" class="option">
						<div class="icon"><span class="fa fa-heart"></span></div>
						<div class="label">My Saved Images</div>
					</div>
				</div>
				<div class="edit" style="display: none;">
					<div id="clipart_color" class="picker">
						<span class="icon glyph-tint"></span>
						<span class="label">Colors</span>
						<span class="arrow"><span class="fa fa-chevron-down"></span></span>
					</div>
					<div id="clipart_align_to_center" class="alignh">
						<span class="fa fa-arrow-right"></span>
						<span class="label">Align To Center</span>
						<span class="fa fa-arrow-left"></span>
					</div>
					<div id="layer_backwards" data-direction="backwards" class="layer">
						<span class="fa fa-step-backward fa-rotate-270"></span>
						<span class="label">Move Backward</span>
					</div>
					<div id="layer_forward" data-direction="forward" class="layer">
						<span class="fa fa-step-forward fa-rotate-270"></span>
						<span class="label">Move Forward</span>
					</div>
					<div id="rotate">
						<span class="fa fa-repeat"></span>
						<span class="label">Rotate</span>
					</div>
					<div id="delete">
						<span class="fa fa-trash"></span>
						<span class="label">Delete</span>
					</div>
					<div id="change_clipart">
						<span class="fa fa-refresh fa-rotate-270"></span>
						<span class="label">Change Clipart</span>
					</div>
					<div class="preview_unavailable">
						<div class="reason"></div>
						We'll send you a proof within 2 business days of ordering.
					</div>
				</div>
			</div>

			<div id="product" class="tools" style="display:none;">
				<div id="product_name" class="header">Gildan Adult T-shirt</div>
				<div id="product_info" class="option"><i class="fa fa-plus-circle"></i> <span class="link">Product Info</span></div>
				<div id="size_and_fit" class="option"><i class="glyph-ruler"></i> <span class="link">Size &amp; Fit</span></div>
				<div id="product_swap" class="option"><i class="glyph-refresh"></i> <span class="link">Change Product</span></div>

				<div id="product_description">
					The Gildan G2000, America's best selling t-shirt! This custom tshirt is available in 64 colors - more choices than any other we offer! Made of pre-shrunk 100% cotton, 6-oz.jersey. Taped neck and shoulders with double-needle seamless collar and hems. Ultra-tight-knit surface offers exceptional decorating.
					<br>-Ash Grey is 99/1 cotton/polyester.
					<br>-Sport Grey, Antique(Cherry Red, Irish Green,Royal)are 90/10 cotton/polyester.
					<br>-Dark Heather, Heather(Cardinal, Indigo, Navy, Sapphire),Safety (Green, Pink and Orange) are 50/50.
					<br><br><br>
					Product SKU: <span class="selectable">G2000</span>
				</div>

				<div class="inventory"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>We are experiencing inventory issues with some sizes and/or colors. Click here for more details.</div>

				<div id="product_color_container">
					Current Color: <span id="product_color_name">White</span>
					<div id="product_color_swatches">

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"><i class="fa fa-check" aria-hidden="true"></i></div>
							<div class="product_color magic swatch" data-hex="FFFFFF" data-original_hex="FFFFFF" data-name="White" data-dark="0">
								<div class="subswatch" style="background-color:#FFFFFF; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="C8C9C7" data-original_hex="C8C9C7" data-name="Ash" data-dark="0">
								<div class="subswatch" style="background-color:#C8C9C7; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="FCECD8" data-original_hex="FCECD8" data-name="Natural" data-dark="0">
								<div class="subswatch" style="background-color:#FCECD8; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="25282A" data-original_hex="25282A" data-name="Black" data-dark="1">
								<div class="subswatch" style="background-color:#25282A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="B1302A" data-original_hex="B1302A" data-name="Red" data-dark="1">
								<div class="subswatch" style="background-color:#B1302A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="224D8F" data-original_hex="224D8F" data-name="Royal" data-dark="1">
								<div class="subswatch" style="background-color:#224D8F; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="263147" data-original_hex="263147" data-name="Navy" data-dark="1">
								<div class="subswatch" style="background-color:#263147; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="3F2A56" data-original_hex="3F2A56" data-name="Purple" data-dark="1">
								<div class="subswatch" style="background-color:#3F2A56; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="EEAD1A" data-original_hex="EEAD1A" data-name="Gold" data-dark="1">
								<div class="subswatch" style="background-color:#EEAD1A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="DF6426" data-original_hex="DF6426" data-name="Orange" data-dark="1">
								<div class="subswatch" style="background-color:#DF6426; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="97999B" data-original_hex="97999B" data-name="Sport Grey" data-dark="1">
								<div class="subswatch" style="background-color:#97999B; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="2A4126" data-original_hex="2A4126" data-name="Forest" data-dark="1">
								<div class="subswatch" style="background-color:#2A4126; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="A3B3CB" data-original_hex="A3B3CB" data-name="Light Blue" data-dark="1">
								<div class="subswatch" style="background-color:#A3B3CB; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="DAC8B6" data-original_hex="DAC8B6" data-name="Sand" data-dark="1">
								<div class="subswatch" style="background-color:#DAC8B6; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="FFE0B1" data-original_hex="FFE0B1" data-name="Vegas Gold" data-dark="1">
								<div class="subswatch" style="background-color:#FFE0B1; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="313D49" data-original_hex="313D49" data-name="Blue Dusk" data-dark="1">
								<div class="subswatch" style="background-color:#313D49; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="8D1A37" data-original_hex="8D1A37" data-name="Cardinal" data-dark="1">
								<div class="subswatch" style="background-color:#8D1A37; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="942F3D" data-original_hex="942F3D" data-name="Heather Cardinal" data-dark="1">
								<div class="subswatch" style="background-color:#942F3D; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container backorder">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="7BA4DB" data-original_hex="7BA4DB" data-name="Carolina Blue" data-dark="1" data-backorder="4XL">
								<div class="subswatch" style="background-color:#7BA4DB; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="66676C" data-original_hex="66676C" data-name="Charcoal" data-dark="1">
								<div class="subswatch" style="background-color:#66676C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="AC2B37" data-original_hex="AC2B37" data-name="Cherry Red" data-dark="1">
								<div class="subswatch" style="background-color:#AC2B37; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="8E6D5A" data-original_hex="8E6D5A" data-name="Chestnut" data-dark="1">
								<div class="subswatch" style="background-color:#8E6D5A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="FFD641" data-original_hex="FFD641" data-name="Daisy" data-dark="1">
								<div class="subswatch" style="background-color:#FFD641; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="423238" data-original_hex="423238" data-name="Dark Chocolate" data-dark="1">
								<div class="subswatch" style="background-color:#423238; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="3F4444" data-original_hex="3F4444" data-name="Dark Heather" data-dark="1">
								<div class="subswatch" style="background-color:#3F4444; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="555965" data-original_hex="555965" data-name="Heather Navy" data-dark="1">
								<div class="subswatch" style="background-color:#555965; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="486D87" data-original_hex="486D87" data-name="Indigo Blue" data-dark="1">
								<div class="subswatch" style="background-color:#486D87; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="516AA1" data-original_hex="516AA1" data-name="Iris" data-dark="1">
								<div class="subswatch" style="background-color:#516AA1; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="009E69" data-original_hex="009E69" data-name="Irish Green" data-dark="1">
								<div class="subswatch" style="background-color:#009E69; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="01845C" data-original_hex="01845C" data-name="Kelly Green" data-dark="1">
								<div class="subswatch" style="background-color:#01845C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="86C55C" data-original_hex="86C55C" data-name="Lime" data-dark="1">
								<div class="subswatch" style="background-color:#86C55C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="4F0030" data-original_hex="4F0030" data-name="Maroon" data-dark="1">
								<div class="subswatch" style="background-color:#4F0030; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container backorder">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="76765C" data-original_hex="76765C" data-name="Military Green" data-dark="1" data-backorder="3XL, 4XL, 5XL">
								<div class="subswatch" style="background-color:#76765C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="554D37" data-original_hex="554D37" data-name="Olive" data-dark="1">
								<div class="subswatch" style="background-color:#554D37; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="ECFF40" data-original_hex="ECFF40" data-name="Safety Green" data-dark="1">
								<div class="subswatch" style="background-color:#ECFF40; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="FF6907" data-original_hex="FF6907" data-name="Safety Orange" data-dark="1">
								<div class="subswatch" style="background-color:#FF6907; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="82919A" data-original_hex="82919A" data-name="Stone Blue" data-dark="1">
								<div class="subswatch" style="background-color:#82919A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="BC7042" data-original_hex="BC7042" data-name="Texas Orange" data-dark="1">
								<div class="subswatch" style="background-color:#BC7042; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="E76C9B" data-original_hex="E76C9B" data-name="Azalea" data-dark="1">
								<div class="subswatch" style="background-color:#E76C9B; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="E4BED2" data-original_hex="E4BED2" data-name="Light Pink" data-dark="1">
								<div class="subswatch" style="background-color:#E4BED2; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="DB3E79" data-original_hex="DB3E79" data-name="Heliconia" data-dark="1">
								<div class="subswatch" style="background-color:#DB3E79; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="018E87" data-original_hex="018E87" data-name="Jade Dome" data-dark="1">
								<div class="subswatch" style="background-color:#018E87; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="353966" data-original_hex="353966" data-name="Metro Blue" data-dark="1">
								<div class="subswatch" style="background-color:#353966; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="C8A5C6" data-original_hex="C8A5C6" data-name="Orchid" data-dark="1">
								<div class="subswatch" style="background-color:#C8A5C6; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="CDD69C" data-original_hex="CDD69C" data-name="Pistachio" data-dark="1">
								<div class="subswatch" style="background-color:#CDD69C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container backorder">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="008BB9" data-original_hex="008BB9" data-name="Sapphire" data-dark="1" data-backorder="4XL">
								<div class="subswatch" style="background-color:#008BB9; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="8BC6DE" data-original_hex="8BC6DE" data-name="Sky" data-dark="1">
								<div class="subswatch" style="background-color:#8BC6DE; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="B49771" data-original_hex="B49771" data-name="Tan" data-dark="1">
								<div class="subswatch" style="background-color:#B49771; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="F28737" data-original_hex="F28737" data-name="Tangerine" data-dark="1">
								<div class="subswatch" style="background-color:#F28737; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="224684" data-original_hex="224684" data-name="Antique Royal" data-dark="1">
								<div class="subswatch" style="background-color:#224684; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="971B2F" data-original_hex="971B2F" data-name="Antique Cherry Red" data-dark="1">
								<div class="subswatch" style="background-color:#971B2F; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="008F4A" data-original_hex="008F4A" data-name="Antique Irish Green" data-dark="1">
								<div class="subswatch" style="background-color:#008F4A; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="075763" data-original_hex="075763" data-name="Galapagos Blue" data-dark="1">
								<div class="subswatch" style="background-color:#075763; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="1F78AD" data-original_hex="1F78AD" data-name="Heather Sapphire" data-dark="1">
								<div class="subswatch" style="background-color:#1F78AD; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="E0D8D1" data-original_hex="E0D8D1" data-name="Ice Grey" data-dark="1">
								<div class="subswatch" style="background-color:#E0D8D1; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="FD809C" data-original_hex="FD809C" data-name="Safety Pink" data-dark="1">
								<div class="subswatch" style="background-color:#FD809C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="A3A76D" data-original_hex="A3A76D" data-name="Kiwi" data-dark="1">
								<div class="subswatch" style="background-color:#A3A76D; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="F6EC7C" data-original_hex="F6EC7C" data-name="Cornsilk" data-dark="1">
								<div class="subswatch" style="background-color:#F6EC7C; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="AEE3A5" data-original_hex="AEE3A5" data-name="Mint Green" data-dark="1">
								<div class="subswatch" style="background-color:#AEE3A5; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="857653" data-original_hex="857653" data-name="Prairie Dust" data-dark="1">
								<div class="subswatch" style="background-color:#857653; width:100%"></div>
							</div>
						</div>

						<div class="product_color_swatch_container">
							<div class="checkmark_overlay"></div>
							<div class="product_color magic swatch" data-hex="666C7A" data-original_hex="666C7A" data-name="Heather Indigo" data-dark="1">
								<div class="subswatch" style="background-color:#666C7A; width:100%"></div>
							</div>
						</div>
					</div>
					<div id="dark_charge_language">
						<div class="note">Please Note:</div>
						<div class="language">* There is a $<span class="cost">3.00</span> upcharge per print location on dark garments.<br>White ink may not print on light garments</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="pricing_modal" class="modal" style="display:none;">
		<div class="header">Pricing &amp; Checkout<i class="fa fa-times close" aria-hidden="true"></i></div>

		<div id="sizeqty_label">Sizes &amp; Quantities: <div id="qty_upsell"></div></div>








		<div id="product-main-grid">
			<div class="product-main-grid product-main-grid-desktop product-main-grid-selected fs-large" data-grid="9935">
				<table id="product-main-tbl">
					<caption> Pricing</caption>
					<thead>
					<tr class="product-main-quantities" style="vertical-align:bottom;">
						<th class="product-main-qty-break product-main-visible" style="">1-5</th>
						<th class="product-main-qty-break product-main-visible" style="">6-11</th>
						<th class="product-main-qty-break product-main-visible" style="">12-23</th>
						<th class="product-main-qty-break product-main-visible" style="">24-47</th>
						<th class="product-main-qty-break product-main-visible" style="">48-71</th>
						<th class="product-main-qty-break product-main-visible" style="">72-287</th>
						<th class="product-main-qty-break product-main-visible" style="">288-499</th>
						<th class="product-main-qty-break product-main-visible" style="">500+</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td class="product-main-visible" style="" light-price="$24.99" dark-price="$27.99" price-type="regular">$24.99</td>
						<td class="strikeout product-main-visible" style="" light-price="$21.32" dark-price="$25.32" price-type="sale">$21.32</td>
						<td class="strikeout product-main-visible" style="" light-price="$15.99" dark-price="$19.99" price-type="sale">$15.99</td>
						<td class="strikeout product-main-visible" style="" light-price="$15.32" dark-price="$17.32" price-type="sale">$15.32</td>
						<td class="strikeout product-main-visible" style="" light-price="$13.32" dark-price="$14.32" price-type="sale">$13.32</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.99" dark-price="$12.99" price-type="sale">$11.99</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.32" dark-price="$12.32" price-type="sale">$11.32</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.05" dark-price="$12.05" price-type="sale">$11.05</td>
					</tr>
					<tr class="product-main-prices">
						<td class="product-main-visible" style="" light-price="$24.99" dark-price="$27.99" price-type="sale">$24.99</td>
						<td class="sale product-main-visible" style="" light-price="$15.99" dark-price="$18.99" price-type="sale">$15.99</td>
						<td class="sale product-main-visible" style="" light-price="$11.99" dark-price="$14.99" price-type="sale">$11.99</td>
						<td class="sale product-main-visible" style="" light-price="$11.49" dark-price="$12.99" price-type="sale">$11.49</td>
						<td class="sale product-main-visible" style="" light-price="$9.99" dark-price="$10.74" price-type="sale">$9.99</td>
						<td class="sale product-main-visible" style="" light-price="$8.99" dark-price="$9.74" price-type="sale">$8.99</td>
						<td class="sale product-main-visible" style="" light-price="$8.49" dark-price="$9.24" price-type="sale">$8.49</td>
						<td class="sale product-main-visible" style="" light-price="$8.29" dark-price="$9.04" price-type="sale">$8.29</td>
					</tr>
					</tbody>
				</table>


			</div>

			<div class="product-main-grid product-main-grid-mobile product-main-grid-selected fs-large" data-grid="9935">
				<table id="product-main-tbl">
					<caption> Pricing</caption>
					<thead>

					<tr><th>Quantity</th>
						<th>Price</th>
						<th>Sale</th>
						<th class="promo-pricing">w/ Coupon</th>

					</tr></thead>
					<tbody>
					<tr>
						<td class="product-main-qty-break product-main-visible" style="">1-5</td>
						<td class="product-main-visible" style="" light-price="$24.99" dark-price="$27.99" price-type="regular">$24.99</td>
						<td class="product-main-visible" style="" light-price="$24.99" dark-price="$27.99" price-type="sale">$24.99</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">6-11</td>
						<td class="strikeout product-main-visible" style="" light-price="$21.32" dark-price="$25.32" price-type="sale">$21.32</td>
						<td class="sale product-main-visible" style="" light-price="$15.99" dark-price="$18.99" price-type="sale">$15.99</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">12-23</td>
						<td class="strikeout product-main-visible" style="" light-price="$15.99" dark-price="$19.99" price-type="sale">$15.99</td>
						<td class="sale product-main-visible" style="" light-price="$11.99" dark-price="$14.99" price-type="sale">$11.99</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">24-47</td>
						<td class="strikeout product-main-visible" style="" light-price="$15.32" dark-price="$17.32" price-type="sale">$15.32</td>
						<td class="sale product-main-visible" style="" light-price="$11.49" dark-price="$12.99" price-type="sale">$11.49</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">48-71</td>
						<td class="strikeout product-main-visible" style="" light-price="$13.32" dark-price="$14.32" price-type="sale">$13.32</td>
						<td class="sale product-main-visible" style="" light-price="$9.99" dark-price="$10.74" price-type="sale">$9.99</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">72-287</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.99" dark-price="$12.99" price-type="sale">$11.99</td>
						<td class="sale product-main-visible" style="" light-price="$8.99" dark-price="$9.74" price-type="sale">$8.99</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">288-499</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.32" dark-price="$12.32" price-type="sale">$11.32</td>
						<td class="sale product-main-visible" style="" light-price="$8.49" dark-price="$9.24" price-type="sale">$8.49</td>
						<td class="promo-pricing"></td>
					</tr><tr>
						<td class="product-main-qty-break product-main-visible" style="">500+</td>
						<td class="strikeout product-main-visible" style="" light-price="$11.05" dark-price="$12.05" price-type="sale">$11.05</td>
						<td class="sale product-main-visible" style="" light-price="$8.29" dark-price="$9.04" price-type="sale">$8.29</td>
						<td class="promo-pricing"></td>
					</tr>
					</tbody>
				</table>


			</div>
			<div class="fc"></div>
		</div>

		<div class="inventory"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>We are experiencing inventory issues with some sizes and/or colors. Click here for more details.</div>

		<div id="size_qtys" class="block">

			<div class="sizeqty" data-size="S">
				<input id="size[S]" name="size[S]" maxlength="4" data-size="S" type="tel" class="qty" value="0">
				<div class="size">S</div>
				<div class="upcharge">&nbsp;</div>
			</div>

			<div class="sizeqty" data-size="M">
				<input id="size[M]" name="size[M]" maxlength="4" data-size="M" type="tel" class="qty" value="0">
				<div class="size">M</div>
				<div class="upcharge">&nbsp;</div>
			</div>

			<div class="sizeqty" data-size="L">
				<input id="size[L]" name="size[L]" maxlength="4" data-size="L" type="tel" class="qty" value="0">
				<div class="size">L</div>
				<div class="upcharge">&nbsp;</div>
			</div>

			<div class="sizeqty" data-size="XL">
				<input id="size[XL]" name="size[XL]" maxlength="4" data-size="XL" type="tel" class="qty" value="0">
				<div class="size">XL</div>
				<div class="upcharge">&nbsp;</div>
			</div>

			<div class="sizeqty" data-size="2XL">
				<input id="size[2XL]" name="size[2XL]" maxlength="4" data-size="2XL" type="tel" class="qty" value="0">
				<div class="size">2XL</div>
				<div class="upcharge">+$3</div>
			</div>

			<div class="sizeqty" data-size="3XL">
				<input id="size[3XL]" name="size[3XL]" maxlength="4" data-size="3XL" type="tel" class="qty" value="0">
				<div class="size">3XL</div>
				<div class="upcharge">+$3</div>
			</div>

			<div class="sizeqty" data-size="4XL">
				<input id="size[4XL]" name="size[4XL]" maxlength="4" data-size="4XL" type="tel" class="qty" value="0">
				<div class="size">4XL</div>
				<div class="upcharge">+$4</div>
			</div>

			<div class="sizeqty" data-size="5XL">
				<input id="size[5XL]" name="size[5XL]" maxlength="4" data-size="5XL" type="tel" class="qty" value="0">
				<div class="size">5XL</div>
				<div class="upcharge">+$4</div>
			</div>
		</div>

		<div id="missing_roster"><i class="fa fa-exclamation-circle" aria-hidden="true"></i>Your roster is empty. Click here to add names and/or numbers to your design.</div>
		<div id="roster_label">Your Roster: <span class="edit">Edit Your Roster</span></div>
		<div id="roster_output"></div>

		<div id="rep_pricing"><i class="fa fa-exclamation-triangle"></i>Custom Pricing Required</div>
		<div id="breakdown" class="block"><div class="PRICE-BREAKDOWN-CONTAINER"><div class="PRICE-BREAKDOWN-BAR"><div class="PRICE-BREAKDOWN-LABEL ">Unit Price:</div><div class="PRICE-BREAKDOWN-NO-LT">&nbsp;</div><div class="PRICE-BREAKDOWN-VALUE">$24.99</div><div class="PRICE-BREAKDOWN-TOOLTIP js-tooltip fa fa-question-circle" data-title="Base product price (includes 1 decoration location)" style="font-size: 10.5pt; color: #269de9; margin-top: 2px;"></div><div style="clear: both;"></div></div><div class="PRICE-BREAKDOWN-BAR"><div class="PRICE-BREAKDOWN-LABEL ">Quantity:</div><div class="PRICE-BREAKDOWN-NO-LT">&nbsp;</div><div class="PRICE-BREAKDOWN-VALUE">0</div><div style="clear: both;"></div></div><div class="PRICE-BREAKDOWN-BAR"><div class="PRICE-BREAKDOWN-LABEL ">Price Each:</div><div class="PRICE-BREAKDOWN-NO-LT">&nbsp;</div><div class="PRICE-BREAKDOWN-VALUE">--</div><div class="PRICE-BREAKDOWN-TOOLTIP js-tooltip fa fa-question-circle" data-title="Unit price plus fees and charges" style="font-size: 10.5pt; color: #269de9; margin-top: 2px;"></div><div style="clear: both;"></div></div><div class="PRICE-BREAKDOWN-BAR BAR-TOTAL"><div class="PRICE-BREAKDOWN-LABEL ">Total Before S&amp;H:</div><div class="PRICE-BREAKDOWN-NO-LT">&nbsp;</div><div class="PRICE-BREAKDOWN-VALUE PRICE-BREAKDOWN-TOTAL">--</div><div class="PRICE-BREAKDOWN-TOOLTIP js-tooltip fa fa-question-circle" data-title="Combined product total before taxes and shipping" style="font-size: 10.5pt; color: #269de9; margin-top: 2px;"></div><div style="clear: both;"></div></div><div class="PRICE-BREAKDOWN-BAR"><div class="PRICE-BREAKDOWN-SHIPPING">FREE Shipping on ALL Orders of $99 or more!</div></div></div></div>

		<div id="atc" class="block" style="width:100%;">
			<button class="magic big action"><div class="fa fa-shopping-cart"></div> Add To Cart</button>
			<div class="keep_designing"><i class="fa fa-arrow-left"></i>Keep Designing</div>
			<div class="id selectable fullwidth">Design ID: 17253656</div>
			<div class="save_link" data-link="save" style="display: inline-block;"><i class="fa fa-floppy-o"></i>Save</div>
			<div class="email_link" data-link="email" style="display: inline-block;"><i class="fa fa-envelope"></i>Email</div>
			<div class="print_link" data-link="print" style="display: inline-block;"><i class="fa fa-print"></i>Print</div>
		</div>
		<div class="whatdoiget">What's included with my purchase?</div>
	</div>
</div>
<div id="roster_modal" class="modal" style="width: 480px; height: 560px; z-index: 601; margin-top: -280px; margin-left: -252px;">







	<div class="header"><span class="title">Edit My Roster</span><i class="fa fa-times close" aria-hidden="true"></i></div>
	<div class="content"><div class="note"><ul><li>Our experts will select the best decoration method to apply the roster to your products.</li><li>Each name &amp; number will be centered and evenly spaced on your finished products.</li>
		<li>Have questions or need help? <span class="chat">Start a live chat</span> or call us at 877-535-5646</li>
	</ul></div>

		<div class="container">
			<div class="head">
				<div class="size heading">Size</div>
				<div class="number heading">Number</div>
				<div class="name heading">Name</div>
				<div class="clear heading">Clear Roster</div>
			</div>
			<!--<div class="text">
				The names &amp; numbers you provide below will replace what's shown in your design.<br/>
				If you do not provide names or numbers, your product will be decorated as shown.
			</div>-->
			<div class="scroller" style="height: 382px;">
				<div class="row alt"><div class="item">1.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row"><div class="item">2.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row alt"><div class="item">3.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row"><div class="item">4.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row alt"><div class="item">5.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row"><div class="item">6.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row alt"><div class="item">7.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row"><div class="item">8.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row alt"><div class="item">9.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div><div class="row"><div class="item">10.</div><div class="size"><select class="roster_size"><option value="">Add Size...</option><option value="S" data-size="S">S</option><option value="M" data-size="M">M</option><option value="L" data-size="L">L</option><option value="XL" data-size="XL">XL</option><option value="2XL" data-size="2XL">2XL ( +$3 )</option><option value="3XL" data-size="3XL">3XL ( +$3 )</option><option value="4XL" data-size="4XL">4XL ( +$4 )</option><option value="5XL" data-size="5XL">5XL ( +$4 )</option></select></div><div class="number"><input class="input" type="tel" value="" maxlength="2"></div><div class="name"><input class="input" type="text" value="" maxlength="40"></div><div class="delete"><span class="fa fa-trash"></span></div></div>
			</div>
			<div class="foot">
				<!--<input type="text" id="howmanymore" size="2" maxlength="2" value="1"/>-->
				<div class="addmore"><i class="fa fa-user-plus" aria-hidden="true"></i>Add More Players</div>
				<div class="save"><i class="fa fa-floppy-o" aria-hidden="true"></i>Save &amp; Close</div>
			</div>
		</div>
	</div>
</div>
