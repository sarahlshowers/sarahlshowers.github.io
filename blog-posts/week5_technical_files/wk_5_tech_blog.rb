class Cocktail
  def initialize(drink, liquor, mixer)
    @drink = drink
    @liquor = liquor
    @mixer = mixer
  end

	def drink_order
		puts "The recepie for the #{@drink} is, #{@liquor} and #{@mixer}."
	end
end
 
greyhound = Cocktail.new("Greyhound", "vodka", "grapefruit juice")
gimlet = Cocktail.new("Gimlet", "gin", "sweetened lime juice")
cuba_libre = Cocktail.new("Cuba Libre", "rum", "coke")

greyhound.drink_order
gimlet.drink_order
cuba_libre.drink_order