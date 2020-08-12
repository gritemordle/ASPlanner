


    function defineNodes()
	{
		
		let nodes=new Array();
		
		nodes[0] = { 
				x:507,
				y:454,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Singularity','Other tree roots may be unlocked without','requiring a connection to the existing perks','Grants 3 additional Perk Points'],
				rarity: 1,
				skill_sigularity: 1
					};

		nodes[1] = { 
				x:522,
				y:427,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Greater Increased Perk Effect','7% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[0]],
				perk_effectiveness: 7
					};
					
		nodes[2] = { 
				x:480,
				y:440,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Greater Increased Perk Effect','7% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[1]],
				perk_effectiveness: 7
					};
					
  		nodes[3] = { 
				x:493,
				y:482,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Greater Increased Perk Effect','7% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[2],nodes[0]],
				perk_effectiveness: 7
					}; 
 	
   		nodes[4] = { 
				x:536,
				y:469,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Greater Increased Perk Effect','7% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[3],nodes[1]],
				perk_effectiveness: 7
					};  
					
   		nodes[5] = { 
				x:481,
				y:510,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[3]],
				perk_effectiveness: 5
					}; 
					
   		nodes[6] = { 
				x:466,
				y:469,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Amulet Effectiveness','15% increased Amulet Enchantments','','Enchantments gained by the Resplendant Prism', 'have 15% increased levels.'],
				rarity: 0,
				n:[nodes[5]],
				amulet_enchantments: 15
					}; 
					
  		nodes[7] = { 
				x:439,
				y:427,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[6]],
				perk_effectiveness: 5
					}; 

   		nodes[8] = { 
				x:480,
				y:413,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Amulet Effectiveness','15% increased Amulet Enchantments','','Enchantments gained by the Resplendant Prism',  'have 15% increased levels.'],
				rarity: 0,
				n:[nodes[7]],
				amulet_enchantments: 15
					}; 
  
  		nodes[9] = { 
				x:507,
				y:385,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[1],nodes[8]],
				perk_effectiveness: 5
					};   
  
    		nodes[10] = { 
				x:522,
				y:342,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[9]],
				perk_effectiveness: 5
					};   
  
     		nodes[11] = { 
				x:493,
				y:313,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[10]],
				perk_effectiveness: 5
					};   
  
      		nodes[12] = { 
				x:508,
				y:271,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[11]],
				perk_effectiveness: 4
					};  
				
    		nodes[13] = { 
				x:409,
				y:440,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[7]],
				perk_effectiveness: 5
					};   
  
     		nodes[14] = { 
				x:367,
				y:426,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[13]],
				perk_effectiveness: 5
					};   
  
      		nodes[15] = { 
				x:326,
				y:412,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[14]],
				perk_effectiveness: 4
					}; 
					
			nodes[16] = { 
				x:439,
				y:525,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[5]],
				perk_effectiveness: 5
					};   
  
     		nodes[17] = { 
				x:424,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[16]],
				perk_effectiveness: 5
					};   
  
      		nodes[18] = { 
				x:395,
				y:623,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[17]],
				perk_effectiveness: 4
					}; 
				
			nodes[19] = { 
				x:522,
				y:510,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[3]],
				perk_effectiveness: 5
					};   
  
     		nodes[20] = { 
				x:563,
				y:538,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[19]],
				perk_effectiveness: 5
					};   
  
      		nodes[21] = { 
				x:592,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[20]],
				perk_effectiveness: 5
					}; 
					
      		nodes[22] = { 
				x:619,
				y:622,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[21]],
				perk_effectiveness: 4
					}; 
					
			nodes[23] = { 
				x:564,
				y:440,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[4]],
				perk_effectiveness: 5
					};   
  
     		nodes[24] = { 
				x:606,
				y:412,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[23]],
				perk_effectiveness: 5
					};   
  
      		nodes[25] = { 
				x:648,
				y:426,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','5% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[24]],
				perk_effectiveness: 5
					}; 
					
      		nodes[26] = { 
				x:690,
				y:412,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[25]],
				perk_effectiveness: 4
					}; 	

      		nodes[27] = { 
				x:649,
				y:399,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','15% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[26]],
				perk_effectiveness: 15
					}; 	
	
      		nodes[28] = { 
				x:676,
				y:454,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','20% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[26]],
				perk_experience: 20
					}; 		
					
      		nodes[29] = { 
				x:634,
				y:581,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','15% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[22]],
				perk_effectiveness: 15
					}; 	
	
      		nodes[30] = { 
				x:578,
				y:609,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','20% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[22]],
				perk_experience: 20
					}; 
					
      		nodes[31] = { 
				x:438,
				y:609,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','15% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[18]],
				perk_effectiveness: 15
					}; 	
	
      		nodes[32] = { 
				x:381,
				y:581,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','20% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[18]],
				perk_experience: 20
					}; 
					
     		nodes[33] = { 
				x:354,
				y:454,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','15% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[15]],
				perk_effectiveness: 15
					}; 	
	
      		nodes[34] = { 
				x:367,
				y:384,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','20% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[15]],
				perk_experience: 20
					}; 
	
     		nodes[35] = { 
				x:466,
				y:299,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','15% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[12]],
				perk_effectiveness: 15
					}; 	
	
      		nodes[36] = { 
				x:536,
				y:299,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','20% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[12]],
				perk_experience: 20
					}; 
	
      		nodes[37] = { 
				x:578,
				y:285,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[12]],
				perk_effectiveness: 4
					}; 	
					
      		nodes[38] = { 
				x:633,
				y:314,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Precision','5% more Melee Damage','5% more Projectile Damage','+2% added Critical Hit Chance'],
				rarity: 0,
				n:[nodes[37]],
				melee_damage_more: 5,
				projectile_damage_more: 5,
				critical_hit_chance_add: 2
					}; 	
					
      		nodes[39] = { 
				x:662,
				y:357,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[38],nodes[26]],
				perk_effectiveness: 4
					}; 						

      		nodes[40] = { 
				x:704,
				y:483,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[26]],
				perk_effectiveness: 4
					}; 

      		nodes[41] = { 
				x:675,
				y:539,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Tough','20% more Armor'],
				rarity: 0,
				n:[nodes[40]],
				armor_more: 20
					}; 

      		nodes[42] = { 
				x:563,
				y:637,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[22]],
				perk_effectiveness: 4
					}; 					
					
      		nodes[43] = { 
				x:508,
				y:652,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Agility','5% increased Movement Speed','+5% added Dodge Chance'],
				rarity: 0,
				n:[nodes[42]],
				movement_speed: 5,
				dodge_add: 5
					};
					
      		nodes[44] = { 
				x:465,
				y:637,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[43],nodes[18]],
				perk_effectiveness: 4
					}; 
					
      		nodes[45] = { 
				x:353,
				y:582,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[18]],
				perk_effectiveness: 4
					}; 
					
			nodes[46] = { 
				x:339,
				y:538,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Bloom','15% more Maximum Life'],
				rarity: 0,
				n:[nodes[45]],
				maximum_life_more: 15
					}; 
					
      		nodes[47] = { 
				x:312,
				y:482,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[15],nodes[46]],
				perk_effectiveness: 4
					}; 		

      		nodes[48] = { 
				x:353,
				y:356,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[15]],
				perk_effectiveness: 4
					}; 	

			nodes[49] = { 
				x:381,
				y:313,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Strong Arms','5% more Mining Speed','10% increased Melee Damage'],
				rarity: 0,
				n:[nodes[48]],
				mining_speed_more: 5,
				melee_damage: 10
					}; 	

      		nodes[50] = { 
				x:437,
				y:285,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[49],nodes[12]],
				perk_effectiveness: 4
					}; 	

      		nodes[51] = { 
				x:662,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[41],nodes[22]],
				perk_effectiveness: 4
					}; 		

      		nodes[52] = { 
				x:591,
				y:328,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Projectile Damage','5% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[38]],
				projectile_damage: 5
					}; 
					
      		nodes[53] = { 
				x:606,
				y:356,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee Damage','5% increased Melee Damage'],
				rarity: 0,
				n:[nodes[52]],
				melee_damage: 5
					}; 

      		nodes[54] = { 
				x:564,
				y:384,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Root: Discidia','+10% added Critical Hit Chance','','Gain experience by dealing damage'],
				rarity: 0,
				n:[nodes[53]],
				critical_hit_chance_add: 10
					}; 
					
     		nodes[55] = { 
				x:423,
				y:327,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','10% increased Mining Speed'],
				rarity: 0,
				n:[nodes[49]],
				mining_speed: 10
					}; 
					
      		nodes[56] = { 
				x:410,
				y:356,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','10% increased Mining Speed'],
				rarity: 0,
				n:[nodes[55]],
				mining_speed: 10
					}; 

      		nodes[57] = { 
				x:451,
				y:383,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Root: Evorsio','20% more Mining Speed','','Gain experience by breaking blocks'],
				rarity: 0,
				n:[nodes[56]],
				mining_speed_more: 20
					}; 

     		nodes[58] = { 
				x:395,
				y:525,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','5% increased Maximum Life'],
				rarity: 0,
				n:[nodes[46]],
				maximum_life: 5
					}; 
					
      		nodes[59] = { 
				x:381,
				y:498,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','5% increased Maximum Life'],
				rarity: 0,
				n:[nodes[58]],
				maximum_life: 5
					}; 

      		nodes[60] = { 
				x:422,
				y:483,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Root: Aevitas','+2 added Maximum Life','','Gain experience by building things'],
				rarity: 0,
				n:[nodes[59]],
				maximum_life_add: 2
					}; 		

    		nodes[61] = { 
				x:494,
				y:609,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','3% increased Movement Speed'],
				rarity: 0,
				n:[nodes[43]],
				movement_speed: 3
					}; 
					
      		nodes[62] = { 
				x:521,
				y:594,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','3% increased Movement Speed'],
				rarity: 0,
				n:[nodes[61]],
				movement_speed: 3
					}; 

      		nodes[63] = { 
				x:507,
				y:554,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Root: Vicio','+1 added Reach','','Gain experience by traveling the world'],
				rarity: 0,
				n:[nodes[62]],
				reach_add: 1
					}; 
		
    		nodes[64] = { 
				x:619,
				y:525,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[41]],
				armor: 5
					}; 
					
      		nodes[65] = { 
				x:634,
				y:497,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[64]],
				armor: 5
					}; 

      		nodes[66] = { 
				x:591,
				y:482,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Root: Armara','15% more Elemental Resistances','','Gain experience by taking damage'],
				rarity: 0,
				n:[nodes[65]],
				elemental_resistances_more: 15
					}; 		
  
      		nodes[67] = { 
				x:634,
				y:201,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[37]],
				perk_effectiveness: 3
					};  
  
        	nodes[68] = { 
				x:578,
				y:159,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[67]],
				perk_effectiveness: 3
					};  
					
      		nodes[69] = { 
				x:466,
				y:173,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[68]],
				perk_effectiveness: 3
					};  
					
      		nodes[70] = { 
				x:367,
				y:201,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[69],nodes[50]],
				perk_effectiveness: 3
					};  
  
       		nodes[71] = { 
				x:311,
				y:257,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Expertise','+1 added Mining Speed','15% increased Reach'],
				rarity: 0,
				n:[nodes[70]],
				mining_speed_add: 1,
				reach: 15
					}; 
  
       		nodes[72] = { 
				x:284,
				y:315,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[71],nodes[48]],
				perk_effectiveness: 3
					};  
  
        	nodes[73] = { 
				x:255,
				y:370,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[72]],
				perk_effectiveness: 3
					};  
					
      		nodes[74] = { 
				x:227,
				y:441,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[73]],
				perk_effectiveness: 3
					};  
					
      		nodes[75] = { 
				x:242,
				y:510,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[74],nodes[47]],
				perk_effectiveness: 3
					};  
  
       		nodes[76] = { 
				x:254,
				y:580,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Added Maximum Life','+2 added Maximum Life'],
				rarity: 0,
				n:[nodes[75]],
				maximum_life_add: 2
					}; 
  
        		nodes[77] = { 
				x:283,
				y:623,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[76],nodes[45]],
				perk_effectiveness: 3
					};  
  
        	nodes[78] = { 
				x:312,
				y:693,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[77]],
				perk_effectiveness: 3
					};  
					
      		nodes[79] = { 
				x:381,
				y:723,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[78]],
				perk_effectiveness: 3
					};  
					
      		nodes[80] = { 
				x:438,
				y:737,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[79],nodes[44]],
				perk_effectiveness: 3
					};  
  
       		nodes[81] = { 
				x:509,
				y:750,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Haste','+1 added Attack Speed','+5% added Dodge Chance'],
				rarity: 0,
				n:[nodes[80]],
				attack_speed_add: 1,
				dodge_add: 5
					};  
  
        		nodes[82] = { 
				x:578,
				y:723,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[81],nodes[42]],
				perk_effectiveness: 3
					};  
  
        	nodes[83] = { 
				x:635,
				y:709,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[82]],
				perk_effectiveness: 3
					};  
					
      		nodes[84] = { 
				x:705,
				y:694,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[83]],
				perk_effectiveness: 3
					};  
					
      		nodes[85] = { 
				x:718,
				y:636,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[84],nodes[51]],
				perk_effectiveness: 3
					};  
  
       		nodes[86] = { 
				x:759,
				y:609,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Stellar Barrier','6% more Elemental Resistances','6% more Armor'],
				rarity: 0,
				n:[nodes[85]],
				elemental_resistances_more: 6,
				armor_more: 6
					};  
 
         	nodes[87] = { 
				x:773,
				y:538,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[86],nodes[40]],
				perk_effectiveness: 3
					};  
  
        	nodes[88] = { 
				x:761,
				y:440,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[87]],
				perk_effectiveness: 3
					};  
					
      		nodes[89] = { 
				x:773,
				y:356,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[88]],
				perk_effectiveness: 3
					};  
					
      		nodes[90] = { 
				x:745,
				y:286,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','3% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[89],nodes[39]],
				perk_effectiveness: 3
					};  
  
       		nodes[91] = { 
				x:703,
				y:229,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Combat Focus','+1 added Reach','15% more Projectile Speed'],
				rarity: 0,
				n:[nodes[90],nodes[67]],
				reach_add: 1,
				projectile_speed_more: 15
					};  
 
			nodes[92] = { 
				x:662,
				y:103,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[67]],
				melee_damage: 2,
				projectile_damage: 2
					};  

			nodes[93] = { 
				x:549,
				y:62,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[92]],
				melee_damage: 2,
				projectile_damage: 2
					};  

			nodes[94] = { 
				x:437,
				y:75,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[93]],
				melee_damage: 2,
				projectile_damage: 2
					};  

			nodes[95] = { 
				x:340,
				y:117,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','2% increased Mining Speed'],
				rarity: 0,
				n:[nodes[94],nodes[70]],
				mining_speed: 2
				};  

			nodes[96] = { 
				x:254,
				y:187,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','2% increased Mining Speed'],
				rarity: 0,
				n:[nodes[95]],
				mining_speed: 2
					};  

			nodes[97] = { 
				x:186,
				y:244,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','2% increased Mining Speed'],
				rarity: 0,
				n:[nodes[96],nodes[72]],
				mining_speed: 2
					};  

			nodes[98] = { 
				x:129,
				y:327,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','2% increased Mining Speed'],
				rarity: 0,
				n:[nodes[97]],
				mining_speed: 2
					};  

			nodes[99] = { 
				x:101,
				y:413,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','2% increased Mining Speed'],
				rarity: 0,
				n:[nodes[98]],
				mining_speed: 2
					};  

			nodes[100] = { 
				x:115,
				y:482,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','2% increased Maximum Life'],
				rarity: 0,
				n:[nodes[99]],
				maximum_life: 2
					};  

			nodes[101] = { 
				x:142,
				y:566,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','2% increased Maximum Life'],
				rarity: 0,
				n:[nodes[100],nodes[75]],
				maximum_life: 2
					};  

			nodes[102] = { 
				x:158,
				y:653,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','2% increased Maximum Life'],
				rarity: 0,
				n:[nodes[101]],
				maximum_life: 2
					};  

			nodes[103] = { 
				x:228,
				y:709,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','2% increased Maximum Life'],
				rarity: 0,
				n:[nodes[102],nodes[77]],
				maximum_life: 2
					};  

			nodes[104] = { 
				x:269,
				y:765,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','2% increased Maximum Life'],
				rarity: 0,
				n:[nodes[103]],
				maximum_life: 2
					};  

			nodes[105] = { 
				x:340,
				y:793,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach and Movement Speed','2% increased Movement Speed','2% increased Reach'],
				rarity: 0,
				n:[nodes[104]],
				reach: 2,
				movement_speed: 2
					};  
					
			nodes[106] = { 
				x:411,
				y:835,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach and Movement Speed','2% increased Movement Speed','2% increased Reach'],
				rarity: 0,
				n:[nodes[105],nodes[80]],
				reach: 2,
				movement_speed: 2
					};  

			nodes[107] = { 
				x:523,
				y:862,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach and Movement Speed','2% increased Movement Speed','2% increased Reach'],
				rarity: 0,
				n:[nodes[106]],
				reach: 2,
				movement_speed: 2
					};  

			nodes[108] = { 
				x:606,
				y:822,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach and Movement Speed','2% increased Movement Speed','2% increased Reach'],
				rarity: 0,
				n:[nodes[107],nodes[82]],
				reach: 2,
				movement_speed: 2
					};  

			nodes[109] = { 
				x:691,
				y:779,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach and Movement Speed','2% increased Movement Speed','2% increased Reach'],
				rarity: 0,
				n:[nodes[108]],
				reach: 2,
				movement_speed: 2
					};  

			nodes[110] = { 
				x:789,
				y:736,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor and Elemental Resistances','2% increased Armor','2% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[109]],
				armor: 2,
				elemental_resistances: 2
					};  

			nodes[111] = { 
				x:817,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor and Elemental Resistances','2% increased Armor','2% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[110],nodes[85]],
				armor: 2,
				elemental_resistances: 2
					};  

			nodes[112] = { 
				x:871,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor and Elemental Resistances','2% increased Armor','2% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[111],nodes[87]],
				armor: 2,
				elemental_resistances: 2
					};  

			nodes[113] = { 
				x:844,
				y:468,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor and Elemental Resistances','2% increased Armor','2% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[112]],
				armor: 2,
				elemental_resistances: 2
					};  

			nodes[114] = { 
				x:873,
				y:385,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor and Elemental Resistances','2% increased Armor','2% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[113]],
				armor: 2,
				elemental_resistances: 2
					};  

			nodes[115] = { 
				x:857,
				y:299,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[114]],
				melee_damage: 2,
				projectile_damage: 2
					};  

			nodes[116] = { 
				x:830,
				y:214,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[115],nodes[90]],
				melee_damage: 2,
				projectile_damage: 2
					};  

			nodes[117] = { 
				x:774,
				y:131,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee and Projectile Damage','2% increased Melee Damage','2% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[116],nodes[92]],
				melee_damage: 2,
				projectile_damage: 2
					};  					

 			nodes[118] = { 
				x:703,
				y:75,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[92]],
				perk_effectiveness: 4
					};  

			nodes[119] = { 
				x:676,
				y:47,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Effect','4% increased Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[118]],
				perk_effectiveness: 4
					};  
					
			nodes[120] = { 
				x:718,
				y:33,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Focus: Vorux','Gain +1% Perk Effect per unsealed allocated Perk.','You cannot gain Perk Experience.','','You can only unlock 1 Focus Perk.'],
				rarity: 1,
				n:[nodes[119]],
				focus_vorux: 1
					};

			nodes[121] = { 
				x:325,
				y:74,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Destruction','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[95]],
				perk_experience: 15
					};  

			nodes[122] = { 
				x:298,
				y:33,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Destruction','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[121]],
				perk_experience: 15
					};  

			nodes[123] = { 
				x:354,
				y:33,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Destruction','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[122],nodes[121]],
				perk_experience: 15
					};  

			nodes[124] = { 
				x:325,
				y:47,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Epiphany: Destruction','Other \'Epiphany\' nodes may be unlocked without','requiring a connection to the existing perks'],
				rarity: 1,
				n:[nodes[121],nodes[122],nodes[123]],
				epiphany: 1
					};  					

			nodes[125] = { 
				x:227,
				y:173,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','3% increased Reach'],
				rarity: 0,
				n:[nodes[96]],
				reach: 3
					};  

			nodes[126] = { 
				x:241,
				y:159,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','3% increased Reach'],
				rarity: 0,
				n:[nodes[125]],
				reach: 3
					};  

			nodes[127] = { 
				x:226,
				y:144,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','3% increased Reach'],
				rarity: 0,
				n:[nodes[126]],
				reach: 3
					};  

			nodes[128] = { 
				x:241,
				y:130,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Area of Effect','+2 levels to Sweeping Edge','Sweeping Edge also works on ranged attacks.'],
				rarity: 1,
				n:[nodes[127]],
				skill_area_of_effect: 1
					};  
					
 			nodes[129] = { 
				x:157,
				y:215,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','4% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[97]],
				perk_effectiveness_more: 4
					};  

			nodes[130] = { 
				x:128,
				y:244,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','4% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[129]],
				perk_effectiveness_more: 4
					};  
					
			nodes[131] = { 
				x:114,
				y:202,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Focus: Alcara','Increases and decreases to Perk Experience','apply to Perk Effect instead at 50% of their value.','','You can only unlock 1 Focus Perk.'],
				rarity: 1,
				n:[nodes[130]],
				focus_alcara: 1
					};
					
			nodes[132] = { 
				x:73,
				y:399,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[99]],
				mining_speed: 5
					};  

			nodes[133] = { 
				x:58,
				y:385,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[132]],
				mining_speed: 5
					};  

			nodes[134] = { 
				x:73,
				y:370,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Consistent Luck','+1 level of Fortune'],
				rarity: 1,
				n:[nodes[133]],
				skill_consistent_luck: 1
					};  			

			nodes[135] = { 
				x:115,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Life Recovery','12% increased Life Recovery'],
				rarity: 0,
				n:[nodes[101]],
				life_recovery: 12
					};  

			nodes[136] = { 
				x:102,
				y:567,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Life Recovery','12% increased Life Recovery'],
				rarity: 0,
				n:[nodes[135]],
				life_recovery: 12
					};  

			nodes[137] = { 
				x:87,
				y:580,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Cleansing','Regenerating life may remove a negative status effect.'],
				rarity: 1,
				n:[nodes[136]],
				skill_cleansing: 1
					}; 

 			nodes[138] = { 
				x:116,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Experience','5% more Perk Experience gained'],
				rarity: 0,
				n:[nodes[102]],
				perk_experience_more: 5
					};  

			nodes[139] = { 
				x:144,
				y:695,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Experience','5% more Perk Experience gained'],
				rarity: 0,
				n:[nodes[138]],
				perk_experience_more: 5
					};  
					
					
					
			nodes[140] = { 
				x:101,
				y:708,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Focus: Ulteria','+5% more Perk Experience per unspent Perk Point','','You can only unlock 1 Focus Perk.'],
				rarity: 1,
				n:[nodes[139]],
				focus_ulteria: 1
					};					
					
			nodes[141] = { 
				x:284,
				y:806,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','6% increased Mining Speed'],
				rarity: 0,
				n:[nodes[104]],
				mining_speed: 6
					};  

			nodes[142] = { 
				x:271,
				y:821,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','6% increased Mining Speed'],
				rarity: 0,
				n:[nodes[141]],
				mining_speed: 6
					};  

			nodes[143] = { 
				x:284,
				y:835,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Trash to Treasure','Voids all dropped trash items.','Occasionally yield valuable ore when voiding trash.'],
				rarity: 1,
				n:[nodes[142]],
				skill_trash_to_treasure: 1
					}; 					
					
			nodes[144] = { 
				x:425,
				y:878,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Motion','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[106]],
				perk_experience: 15
					};  

			nodes[145] = { 
				x:453,
				y:919,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Motion','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[144]],
				perk_experience: 15
					};  

			nodes[146] = { 
				x:397,
				y:919,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Motion','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[145],nodes[144]],
				perk_experience: 15
					};  

			nodes[147] = { 
				x:424,
				y:905,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Epiphany: Motion','Other \'Epiphany\' nodes may be unlocked without','requiring a connection to the existing perks'],
				rarity: 1,
				n:[nodes[144],nodes[145],nodes[146]],
				epiphany: 1
					}; 					
				
			nodes[148] = { 
				x:565,
				y:877,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[107]],
				movement_speed: 5
					};  

			nodes[149] = { 
				x:578,
				y:891,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[148]],
				movement_speed: 5
					}; 
				
			nodes[150] = { 
				x:565,
				y:905,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[149]],
				movement_speed: 5
					};  

			nodes[151] = { 
				x:578,
				y:918,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','10% increased Dodge Chance'],
				rarity: 0,
				n:[nodes[150]],
				dodge: 10
					};  

			nodes[152] = { 
				x:564,
				y:933,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Spectral wings','The vicio mantle now grants flight','instead of elytra gliding.'],
				rarity: 1,
				n:[nodes[151]],
				skill_spectral_wings: 1
					}; 
					
			nodes[153] = { 
				x:817,
				y:793,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Runic Shielding','+2 added Runic Shielding'],
				rarity: 0,
				n:[nodes[110]],
				runic_shielding_add: 2
					};  

			nodes[154] = { 
				x:803,
				y:821,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Vis Inoculation','200% increased Runic Shielding','75% less Armor','15% more Elemental Resistances','Your health is set to 1.'],
				rarity: 1,
				n:[nodes[153]],
				skill_vis_inoculation: 1,
				runic_shielding: 200,
				armor_more: -75,
				elemental_resistances_more: 15,
					}; 
					
			nodes[155] = { 
				x:817,
				y:849,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Runic Shielding','10% increased Runic Shielding'],
				rarity: 0,
				n:[nodes[154]],
				runic_shielding: 10
					}; 
					
			nodes[156] = { 
				x:775,
				y:835,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Runic Shielding','10% increased Runic Shielding'],
				rarity: 0,
				n:[nodes[154]],
				runic_shielding: 10
					}; 
					
			nodes[157] = { 
				x:790,
				y:878,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Runic Shielding','7% increased Runic Shielding'],
				rarity: 0,
				n:[nodes[156]],
				runic_shielding: 7
					}; 
					
			nodes[158] = { 
				x:733,
				y:848,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Runic Shielding','7% increased Runic Shielding'],
				rarity: 0,
				n:[nodes[156]],
				runic_shielding: 7
					}; 
					
			nodes[159] = { 
				x:747,
				y:905,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Runic Shielding','4% increased Runic Shielding'],
				rarity: 0,
				n:[nodes[158]],
				runic_shielding: 4
					}; 

			nodes[160] = { 
				x:831,
				y:708,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','6% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[111]],
				perk_experience: 6
					};  

			nodes[161] = { 
				x:860,
				y:680,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Perk Experience','6% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[160]],
				perk_experience: 6
					};  
					
			nodes[162] = { 
				x:873,
				y:723,
				r:20,s:3, 
				stat:'off', 
				tooltip: ['Focus: Gelu','Gain +3% increased Perk Effect per allocated Perk.','Other modifiers to Perk Effect no longer apply.','','You can only unlock 1 Focus Perk.'],
				rarity: 1,
				n:[nodes[161]],
				focus_gelu: 1
					};						

			nodes[163] = { 
				x:886,
				y:608,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life and less Armor','8% increased Maximum Life','25% less Armor'],
				rarity: 0,
				n:[nodes[112]],
				maximum_life: 8,
				armor: -25
					};  

			nodes[164] = { 
				x:900,
				y:623,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life and less Armor','8% increased Maximum Life','25% less Armor'],
				rarity: 0,
				n:[nodes[163]],
				maximum_life: 8,
				armor: -25
					};  

			nodes[165] = { 
				x:914,
				y:609,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Unwavering','You cannot be knocked back.'],
				rarity: 1,
				n:[nodes[164]],
				skill_unwavering: 1
					}; 
	
			nodes[166] = { 
				x:872,
				y:483,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','6% increased Armor'],
				rarity: 0,
				n:[nodes[113]],
				armor: 6
					};  
	
			nodes[167] = { 
				x:887,
				y:497,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','6% increased Armor'],
				rarity: 0,
				n:[nodes[166]],
				armor: 6
					};  

			nodes[168] = { 
				x:901,
				y:483,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','6% increased Armor'],
				rarity: 0,
				n:[nodes[167]],
				armor: 6
					};  

			nodes[169] = { 
				x:914,
				y:497,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Body Blocking','5% of damage taken is instead directly applied','to your armor per armor piece worn.'],
				rarity: 1,
				n:[nodes[168]],
				skill_body_blocking: 1
					}; 
	
			nodes[170] = { 
				x:915,
				y:399,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Defense','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[114]],
				perk_experience: 15
					};  

			nodes[171] = { 
				x:956,
				y:427,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Defense','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[170]],
				perk_experience: 15
					};  

			nodes[172] = { 
				x:955,
				y:371,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Chakra of Defense','15% increased Perk Experience gained'],
				rarity: 0,
				n:[nodes[171],nodes[170]],
				perk_experience: 15
					};  

			nodes[173] = { 
				x:941,
				y:398,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Epiphany: Defense','Other \'Epiphany\' nodes may be unlocked without','requiring a connection to the existing perks'],
				rarity: 1,
				n:[nodes[170],nodes[171],nodes[172]],
				epiphany: 1
					}; 
					
			nodes[174] = { 
				x:857,
				y:202,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee Damage and Critical Hit Chance','+3% added Critical Hit Chance','10% increased Melee Damage'],
				rarity: 0,
				n:[nodes[116]],
				critical_hit_chance_add: 3,
				melee_damage: 10
					};  

			nodes[175] = { 
				x:872,
				y:188,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee Damage and Critical Hit Chance','+3% added Critical Hit Chance','10% increased Melee Damage'],
				rarity: 0,
				n:[nodes[174]],
				critical_hit_chance_add: 3,
				melee_damage: 10
					};  

			nodes[176] = { 
				x:886,
				y:201,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Blade Finesse','25% increased Critical Damage Multiplier','20% increased Melee Damage'],
				rarity: 0,
				n:[nodes[175]],
				critical_damage_multiplier: 25,
				melee_damage: 20
					}; 
					
			nodes[177] = { 
				x:564,
				y:201,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Critical Hit Chance','+3% added Critical Hit Chance'],
				rarity: 0,
				n:[nodes[68]],
				critical_hit_chance_add: 3
					};  

			nodes[178] = { 
				x:550,
				y:214,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Rampage','Adds a chance to gain increased speed,','attack speed and damage after a killing the enemy.'],
				rarity: 1,
				n:[nodes[177]],
				skill_rampage: 1
					}; 
					
			nodes[179] = { 
				x:564,
				y:229,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Damage','8% increased Projectile Damage','8% increased Melee Damage'],
				rarity: 0,
				n:[nodes[178]],
				projectile_damage: 8,
				melee_damage: 8
					}; 
					
			nodes[180] = { 
				x:550,
				y:242,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Damage','8% increased Projectile Damage','8% increased Melee Damage'],
				rarity: 0,
				n:[nodes[179],nodes[12]],
				projectile_damage: 8,
				melee_damage: 8
					}; 
	
			nodes[181] = { 
				x:493,
				y:243,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Life Leech','3% of damage dealth gained as life'],
				rarity: 0,
				n:[nodes[12]],
				life_leech_add: 3
					}; 

			nodes[182] = { 
				x:479,
				y:229,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Life Leech','3% of damage dealth gained as life'],
				rarity: 0,
				n:[nodes[181]],
				life_leech_add: 3
					}; 

	
			nodes[183] = { 
				x:493,
				y:215,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Vampirism','+5% of damage dealth gained as life','+2 added Maximum Life'],
				rarity: 0,
				n:[nodes[182]],
				life_leech_add: 5,
				maximum_life_add: 2
					}; 					

			nodes[184] = { 
				x:409,
				y:215,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','8% increased Mining Speed'],
				rarity: 0,
				n:[nodes[70]],
				mining_speed: 8
					}; 

			nodes[185] = { 
				x:423,
				y:230,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','8% increased Mining Speed'],
				rarity: 0,
				n:[nodes[184]],
				mining_speed: 8
					}; 

	
			nodes[186] = { 
				x:437,
				y:215,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Last Breath','More Damage and Mining Speed','the more health you\'re missing'],
				rarity: 1,
				n:[nodes[185]],
				skill_last_breath: 1
					}; 						
					
			nodes[187] = { 
				x:634,
				y:117,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed','5% increased Attack Speed'],
				rarity: 0,
				n:[nodes[92]],
				attack_speed: 5
					}; 

			nodes[188] = { 
				x:620,
				y:131,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed','5% increased Attack Speed'],
				rarity: 0,
				n:[nodes[187]],
				attack_speed: 5
					}; 

	
			nodes[189] = { 
				x:606,
				y:116,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Cursed Touch','Adds a chance to poison, slow or ignite enemies on it.'],
				rarity: 1,
				n:[nodes[188]],
				skill_cursed_touch: 1
					}; 						

			nodes[190] = { 
				x:535,
				y:102,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Projectile Damage and Critical Hit Chance','+2% added Critical Hit Chance','20% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[93]],
				projectile_damage: 20,
				critical_hit_chance_add: 2
					}; 

			nodes[191] = { 
				x:522,
				y:117,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Projectile Damage and Critical Hit Chance','+2% added Critical Hit Chance','20% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[190]],
				projectile_damage: 20,
				critical_hit_chance_add: 2
					}; 
	
			nodes[192] = { 
				x:535,
				y:131,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Lethal Draw','15% Critical Damage Multiplier','30% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[191]],
				projectile_damage: 30,
				critical_damage_multiplier: 15
					}; 	
					
			nodes[193] = { 
				x:480,
				y:130,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Lightning Arc','Hitting mobs has a chance','to spawn chaining lightning bolts','between the hit and nearby monsters'],
				rarity: 1,
				n:[nodes[69]],
				skill_lightning_arc: 1
					}; 	

			nodes[194] = { 
				x:437,
				y:117,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Arc Chaining','Lightning Arc bolts chain 1 additional time'],
				rarity: 0,
				n:[nodes[193]],
				lightning_arc_chains_add: 1
					}; 

			nodes[195] = { 
				x:423,
				y:131,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Arc Chaining','Lightning Arc bolts chain 2 additional time'],
				rarity: 0,
				n:[nodes[194]],
				lightning_arc_chains_add: 2
					}; 	

			nodes[196] = { 
				x:437,
				y:144,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Arc Chaining','Lightning Arc bolts chain 1 additional time'],
				rarity: 0,
				n:[nodes[195]],
				lightning_arc_chains_add: 1
					}; 	

			nodes[197] = { 
				x:354,
				y:300,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[49]],
				mining_speed: 5
					}; 
					
			nodes[198] = { 
				x:339,
				y:314,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Excavation','10% more Mining Speed','10% more Attack Speed'],
				rarity: 0,
				n:[nodes[197]],
				mining_speed_more: 10,
				attack_speed_more: 10
					}; 

			nodes[199] = { 
				x:325,
				y:299,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[198],nodes[71]],
				mining_speed: 5
					}; 
					
			nodes[200] = { 
				x:366,
				y:271,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[49]],
				mining_speed: 5
					}; 
					
			nodes[201] = { 
				x:354,
				y:258,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Tunneling','8% increased Minig Speed','15% increased Reach'],
				rarity: 0,
				n:[nodes[200]],
				mining_speed: 8,
				reach: 15
					}; 

			nodes[202] = { 
				x:340,
				y:271,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[201],nodes[71]],
				mining_speed: 5
					}; 
					
			nodes[203] = { 
				x:298,
				y:229,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased PotionEffect Duration','10% increased PotionEffect Duration'],
				rarity: 0,
				n:[nodes[71]],
				potion_effect_duration: 10
					}; 

			nodes[204] = { 
				x:311,
				y:214,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased PotionEffect Duration','10% increased PotionEffect Duration'],
				rarity: 0,
				n:[nodes[203]],
				potion_effect_duration: 10
					}; 
					
			nodes[205] = { 
				x:298,
				y:201,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Profane Chemistry','40% increased PotionEffect Duration','25% less Maximum Life'],
				rarity: 0,
				n:[nodes[204]],
				potion_effect_duration: 40,
				maximum_life_more: -25
					}; 

			nodes[206] = { 
				x:241,
				y:228,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[96]],
				perk_effectiveness_more: 2
					}; 
					
			nodes[207] = { 
				x:254,
				y:244,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[206]],
				perk_effectiveness_more: 2
					}; 

			nodes[208] = { 
				x:270,
				y:230,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Gem Socket','Empty Gem Socket'], has_gem: 0,
				rarity: 0,
				n:[nodes[207]],
				gem_socket_add: 1
					}; 

			nodes[209] = { 
				x:227,
				y:357,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Chained Mining','Breaking a block has a chance of breaking up to 4','nearby blocks of the same type.'],
				rarity: 1,
				n:[nodes[73]],
				skill_chained_mining: 1
					}; 

			nodes[210] = { 
				x:199,
				y:370,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Chained Mining Chance','+15% added chance of Chained Mining'],
				rarity: 0,
				n:[nodes[209]],
				chained_mining_chance_add: 15
					}; 

			nodes[211] = { 
				x:185,
				y:385,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Chained Mining Chance','+15% added chance of Chained Mining'],
				rarity: 0,
				n:[nodes[210]],
				chained_mining_chance_add: 15
					}; 

			nodes[212] = { 
				x:171,
				y:412,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Increased Chained Mining Chance','+100% chance of Chained Mining'],
				rarity: 0,
				n:[nodes[211]],
				chained_mining_chance: 100
					}; 

			nodes[213] = { 
				x:213,
				y:327,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Chained Mining Length','+1 added Chained Mining Length'],
				rarity: 0,
				n:[nodes[209]],
				chained_mining_length_add: 1
					}; 

			nodes[214] = { 
				x:200,
				y:313,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Chained Mining Length','+1 added Chained Mining Length'],
				rarity: 0,
				n:[nodes[213]],
				chained_mining_length_add: 1
					}; 

			nodes[215] = { 
				x:171,
				y:341,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Successive Chains','+50% added chance of triggering additional','Mining Chains when triggering one'],
				rarity: 0,
				n:[nodes[214],nodes[211]],
				successive_chains_add: 50
					}; 

			nodes[216] = { 
				x:185,
				y:285,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Greater Chained Mining Length','+3 added Chained Mining Length'],
				rarity: 0,
				n:[nodes[214]],
				chained_mining_length_add: 3
					}; 

			nodes[217] = { 
				x:214,
				y:498,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Dodge Chance','+2% added Dodge Chance'],
				rarity: 0,
				n:[nodes[75]],
				dodge_add: 2
					}; 

			nodes[218] = { 
				x:199,
				y:510,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','5% increased Dodge Chance'],
				rarity: 0,
				n:[nodes[217]],
				dodge: 5
					}; 

			nodes[219] = { 
				x:185,
				y:497,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','5% increased Dodge Chance'],
				rarity: 0,
				n:[nodes[218]],
				dodge: 5
					}; 

			nodes[220] = { 
				x:200,
				y:482,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Mending','Occasionally your armor repairs itself a bit'],
				rarity: 1,
				n:[nodes[219]],
				skill_mending: 1
					}; 

			nodes[221] = { 
				x:311,
				y:384,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Mining Speed','+1 added Mining Speed'],
				rarity: 0,
				n:[nodes[15]],
				mining_speed_add: 1
					}; 

			nodes[222] = { 
				x:298,
				y:371,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Different Angles','A pickaxe can be used instead of','an axe or shovel'],
				rarity: 1,
				n:[nodes[221]],
				skill_different_angles: 1
					}; 

			nodes[223] = { 
				x:312,
				y:356,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','6% increased Mining Speed'],
				rarity: 0,
				n:[nodes[222]],
				mining_speed: 6
					}; 

			nodes[224] = { 
				x:297,
				y:341,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','6% increased Mining Speed'],
				rarity: 0,
				n:[nodes[223],nodes[72]],
				mining_speed: 6
					}; 

			nodes[225] = { 
				x:255,
				y:426,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Melee Damage','5% more Melee Damage'],
				rarity: 0,
				n:[nodes[74]],
				melee_damage_more: 5
					}; 

			nodes[226] = { 
				x:269,
				y:413,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Breaking Aim','Attacks have a chance of disarming the target'],
				rarity: 1,
				n:[nodes[225]],
				skill_breaking_aim: 1
					}; 

			nodes[227] = { 
				x:269,
				y:440,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Melee Damage','5% more Melee Damage'],
				rarity: 0,
				n:[nodes[225]],
				melee_damage_more: 5
					}; 

			nodes[228] = { 
				x:282,
				y:426,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Melee Damage','5% more Melee Damage'],
				rarity: 0,
				n:[nodes[227],nodes[15]],
				melee_damage_more: 5
					}; 		

			nodes[229] = { 
				x:295,
				y:539,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','4% increased Maximum Life'],
				rarity: 0,
				n:[nodes[46]],
				maximum_life: 4
					}; 						

			nodes[230] = { 
				x:283,
				y:525,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Thick Skin','5% increased Maximum Life','10% increased Armor'],
				rarity: 0,
				n:[nodes[229]],
				maximum_life: 5,
				armor: 10
					}; 	

			nodes[231] = { 
				x:269,
				y:538,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','4% increased Maximum Life'],
				rarity: 0,
				n:[nodes[230],nodes[76]],
				maximum_life: 4
					}; 	
					
			nodes[232] = { 
				x:311,
				y:567,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','4% increased Maximum Life'],
				rarity: 0,
				n:[nodes[46]],
				maximum_life: 4
					}; 	
					
			nodes[233] = { 
				x:297,
				y:581,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Melding','5% increased Maximum Life','10% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[232]],
				maximum_life: 5,
				elemental_resistances: 10
					}; 	

			nodes[234] = { 
				x:283,
				y:567,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Maximum Life','4% increased Maximum Life'],
				rarity: 0,
				n:[nodes[233],nodes[76]],
				maximum_life: 4
					}; 	
					
			nodes[235] = { 
				x:255,
				y:636,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','4% increased Mining Speed'],
				rarity: 0,
				n:[nodes[77]],
				mining_speed: 4
					}; 	
					
			nodes[236] = { 
				x:241,
				y:623,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','4% increased Mining Speed'],
				rarity: 0,
				n:[nodes[235]],
				mining_speed: 4
					}; 	
					
			nodes[237] = { 
				x:227,
				y:637,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Mining Speed','4% increased Mining Speed'],
				rarity: 0,
				n:[nodes[236]],
				mining_speed: 4
					}; 	
					
			nodes[238] = { 
				x:242,
				y:653,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Stone Enrichment','Stone near you might','turn into more valuable stone'],
				rarity: 1,
				n:[nodes[237]],
				skill_stone_enrichment: 1
					}; 	

			nodes[239] = { 
				x:339,
				y:609,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','8% increased Reach'],
				rarity: 0,
				n:[nodes[77]],
				reach: 8
					}; 
					
			nodes[240] = { 
				x:353,
				y:623,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','8% increased Reach'],
				rarity: 0,
				n:[nodes[239]],
				reach: 8
					}; 
					
			nodes[241] = { 
				x:339,
				y:637,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Greed','+1 added Reach','5% increased Mining Speed'],
				rarity: 0,
				n:[nodes[240]],
				reach_add: 1,
				mining_speed: 5
					}; 
				
			nodes[242] = { 
				x:285,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[78]],
				perk_effectiveness_more: 2
					}; 
					
			nodes[243] = { 
				x:271,
				y:695,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[242]],
				perk_effectiveness_more: 2
					}; 
					
			nodes[244] = { 
				x:284,
				y:722,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Gem Socket','Empty Gem Socket'], has_gem: 0,
				rarity: 0,
				n:[nodes[243]],
				gem_socket_add: 1
					}; 
					
			nodes[245] = { 
				x:370,
				y:779,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed and Reach','5% increased Attack Speed','5% increased Reach'],
				rarity: 0,
				n:[nodes[105]],
				attack_speed: 5,
				reach: 5
					}; 
					
			nodes[246] = { 
				x:383,
				y:792,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed and Reach','5% increased Attack Speed','5% increased Reach'],
				rarity: 0,
				n:[nodes[245]],
				attack_speed: 5,
				reach: 5
					}; 
					
			nodes[247] = { 
				x:397,
				y:778,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Spatial Manipulation','Items dropped when mining or slaying monsters are','directly transferred to your inventory.'],
				rarity: 1,
				n:[nodes[246]],
				skill_spatial_manipulation: 1
					}; 
					
			nodes[248] = { 
				x:425,
				y:709,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[80]],
				movement_speed: 5
					}; 
					
			nodes[249] = { 
				x:410,
				y:694,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[248]],
				movement_speed: 5
					}; 
					
			nodes[250] = { 
				x:425,
				y:681,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Hiking Boots','Stepping up single blocks seems way easier.'],
				rarity: 1,
				n:[nodes[249]],
				skill_hiking_boots: 1
					}; 
					
			nodes[251] = { 
				x:411,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Reach','10% increased Reach'],
				rarity: 0,
				n:[nodes[250],nodes[18]],
				reach: 10
					}; 
					
			nodes[252] = { 
				x:355,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Life Recovery','15% increased Life Recovery'],
				rarity: 0,
				n:[nodes[78]],
				life_recovery: 15
					}; 

			nodes[253] = { 
				x:369,
				y:680,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Spreading Growth','Plants around you grow faster'],
				rarity: 1,
				n:[nodes[252]],
				skill_spreading_growth: 1
					}; 
					
			nodes[254] = { 
				x:369,
				y:652,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Life Recovery','15% increased Life Recovery'],
				rarity: 0,
				n:[nodes[252]],
				life_recovery: 15
					}; 
					
			nodes[255] = { 
				x:383,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Life Recovery','15% increased Life Recovery'],
				rarity: 0,
				n:[nodes[254],nodes[18]],
				life_recovery: 15
					}; 

			nodes[256] = { 
				x:522,
				y:680,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','4% increased Movement Speed'],
				rarity: 0,
				n:[nodes[43]],
				movement_speed: 4
					}; 
					
			nodes[257] = { 
				x:537,
				y:694,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Swift','4% increased Movement Speed','10% increased Dodge Chance'],
				rarity: 0,
				n:[nodes[256]],
				movement_speed: 4,
				dodge: 10
					}; 
					
			nodes[258] = { 
				x:522,
				y:708,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','4% increased Movement Speed'],
				rarity: 0,
				n:[nodes[257],nodes[81]],
				movement_speed: 4
					}; 

			nodes[259] = { 
				x:495,
				y:694,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','4% increased Movement Speed'],
				rarity: 0,
				n:[nodes[43]],
				movement_speed: 4
					}; 
					
			nodes[260] = { 
				x:479,
				y:708,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Rapid Pace','15% increased Attack Speed'],
				rarity: 0,
				n:[nodes[259]],
				attack_speed: 15,
					}; 
					
			nodes[261] = { 
				x:494,
				y:723,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','4% increased Movement Speed'],
				rarity: 0,
				n:[nodes[260],nodes[81]],
				movement_speed: 4
					}; 	

			nodes[262] = { 
				x:481,
				y:778,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Swimming Speed','10% increased Swimming Speed'],
				rarity: 0,
				n:[nodes[81]],
				swimming_speed: 10
					}; 	

			nodes[263] = { 
				x:466,
				y:793,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Swimming Speed','10% increased Swimming Speed'],
				rarity: 0,
				n:[nodes[262]],
				swimming_speed: 10
					}; 	

			nodes[264] = { 
				x:480,
				y:806,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Swimming Speed','10% increased Swimming Speed'],
				rarity: 0,
				n:[nodes[263]],
				swimming_speed: 10
					}; 	

			nodes[265] = { 
				x:466,
				y:821,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Additional Fins','Increases and decreases to Movement Speed also','apply to Swimming Speed at 50% of their value.'],
				rarity: 1,
				n:[nodes[264]],
				skill_additional_fins: 1
					}; 						
	
			nodes[266] = { 
				x:551,
				y:765,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','10% Increased Dodge Chance'],
				rarity: 0,
				n:[nodes[82]],
				dodge: 10
					}; 	

			nodes[267] = { 
				x:537,
				y:779,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','10% Increased Dodge Chance'],
				rarity: 0,
				n:[nodes[266]],
				dodge: 10
					}; 	

			nodes[268] = { 
				x:551,
				y:793,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Dodge Chance','10% Increased Dodge Chance'],
				rarity: 0,
				n:[nodes[267]],
				dodge: 10
					}; 	

			nodes[269] = { 
				x:565,
				y:778,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Bigger Stomach','Reduces your overall need for food.'],
				rarity: 1,
				n:[nodes[268]],
				skill_bigger_stomach: 1
					}; 	
	
			nodes[270] = { 
				x:593,
				y:695,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[82]],
				movement_speed: 5
					}; 	

			nodes[271] = { 
				x:606,
				y:680,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[270]],
				movement_speed: 5
					}; 	

			nodes[272] = { 
				x:592,
				y:667,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Miner\'s Delight','Places light sources close to you in caves'],
				rarity: 1,
				n:[nodes[271]],
				skill_miners_delight: 1
					}; 	

			nodes[273] = { 
				x:635,
				y:652,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed','5% Increased Attack Speed'],
				rarity: 0,
				n:[nodes[22]],
				attack_speed: 5
					}; 	

			nodes[274] = { 
				x:620,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Attack Speed','5% Increased Attack Speed'],
				rarity: 0,
				n:[nodes[273]],
				attack_speed: 5
					}; 	

			nodes[275] = { 
				x:606,
				y:653,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Zeal','15% Increased Attack Speed'],
				rarity: 0,
				n:[nodes[274]],
				attack_speed: 15
					}; 						
	
			nodes[276] = { 
				x:677,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','10% Increased Armor'],
				rarity: 0,
				n:[nodes[85]],
				armor: 10
					}; 	

			nodes[277] = { 
				x:662,
				y:652,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistance','10% Increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[276]],
				elemental_resistances: 10
					}; 	

			nodes[278] = { 
				x:675,
				y:637,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Diamond Skin','Take 30% less damage when wearing','less that 2 armor pieces.'],
				rarity: 1,
				n:[nodes[277]],
				skill_diamond_skin: 1
					}; 	

			nodes[279] = { 
				x:719,
				y:737,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[84]],
				perk_effectiveness_more: 2
					}; 	

			nodes[280] = { 
				x:705,
				y:751,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[279]],
				perk_effectiveness_more: 2
					}; 	

			nodes[281] = { 
				x:690,
				y:737,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Gem Socket','Empty Gem Socket'], has_gem: 0,
				rarity: 0,
				n:[nodes[280]],
				gem_socket_add: 1
					}; 	
	
			nodes[282] = { 
				x:733,
				y:680,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistance','5% increased Elemental Reistances'],
				rarity: 0,
				n:[nodes[84]],
				elemental_resistances: 5
					}; 	

			nodes[283] = { 
				x:747,
				y:667,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistance','5% increased Elemental Reistances'],
				rarity: 0,
				n:[nodes[282]],
				elemental_resistances: 5
					}; 	
					
			nodes[284] = { 
				x:761,
				y:681,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistance','5% increased Elemental Reistances'],
				rarity: 0,
				n:[nodes[283]],
				elemental_resistances: 5
					}; 

			nodes[285] = { 
				x:747,
				y:694,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Phoenix Blessing','Can save you from death in dire situations.'],
				rarity: 1,
				n:[nodes[284]],
				skill_phoenix_blessing: 1
					}; 	
	
	
	
	
			nodes[286] = { 
				x:704,
				y:594,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[86]],
				armor: 5
					};
					
			nodes[287] = { 
				x:690,
				y:580,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Unwavering','5% more Armor','+3% added Dodge Chance'],
				rarity: 0,
				n:[nodes[286]],
				armor_more: 5,
				dodge_add: 3
					};
	
			nodes[288] = { 
				x:705,
				y:568,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[287],nodes[41]],
				armor: 5
					};

			nodes[289] = { 
				x:732,
				y:581,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistances','6% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[86]],
				elemental_resistances: 6
					};

			nodes[290] = { 
				x:746,
				y:567,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Shrouded Shield','10% increased Elemental Resistances','+1 added Maximum Life'],
				rarity: 0,
				n:[nodes[289]],
				elemental_resistances: 10,
				maximum_life_add: 1
					};

			nodes[291] = { 
				x:732,
				y:553,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Elemental Resistances','6% increased Elemental Resistances'],
				rarity: 0,
				n:[nodes[41], nodes[290]],
				elemental_resistances: 6
					};					

			nodes[292] = { 
				x:801,
				y:524,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Armor','+1 added Armor'],
				rarity: 0,
				n:[nodes[87]],
				armor_add: 1
					};
					
			nodes[293] = { 
				x:816,
				y:511,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Armor','+1 added Armor'],
				rarity: 0,
				n:[nodes[292]],
				armor_add: 1
					};						
					
			nodes[294] = { 
				x:828,
				y:525,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Added Armor','+1 added Armor'],
				rarity: 0,
				n:[nodes[293]],
				armor_add: 1
					};	
					
			nodes[295] = { 
				x:816,
				y:539,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Bulwark','+6 added Armor','+2 added Armor Toughness'],
				rarity: 0,
				n:[nodes[294]],
				armor_add: 6,
				armor_toughness_add: 2
					};	
					
			nodes[296] = { 
				x:731,
				y:469,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Thorns','+5% of melee damage taken is reflected'],
				rarity: 0,
				n:[nodes[40]],
				reflection: 5
					};						
					
			nodes[297] = { 
				x:745,
				y:454,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Thorns','+10% of melee damage taken is reflected'],
				rarity: 0,
				n:[nodes[296]],
				reflection: 10
					};						

			nodes[298] = { 
				x:732,
				y:440,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Dislocated Reflection','+10% of melee damage taken is reflected','Ranged damage is also being reflected'],
				rarity: 0,
				n:[nodes[297]],
				skill_dislocated_reflection: 1,
				reflection: 10
					};	
					
			nodes[299] = { 
				x:718,
				y:398,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[26]],
				armor: 5
					};	

			nodes[300] = { 
				x:731,
				y:412,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Armor','5% increased Armor'],
				rarity: 0,
				n:[nodes[299]],
				armor: 5
					};						

			nodes[301] = { 
				x:746,
				y:398,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Bastion of Flesh','Convert all increases and decreases of armor to life.','You have no armor.'],
				rarity: 1,
				n:[nodes[300]],
				skill_bastion_of_flesh: 1
					};		

			nodes[302] = { 
				x:718,
				y:370,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Bleeding','Adds a chance that mobs bleed after being hit','dealing damage to them for the bleed duration'],
				rarity: 1,
				n:[nodes[39]],
				skill_bleeding: 1
					};	

			nodes[303] = { 
				x:732,
				y:357,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Bleed Duration','40% increased Bleed Duration'],
				rarity: 0,
				n:[nodes[302]],
				bleed_duration: 40
					};	

			nodes[304] = { 
				x:717,
				y:341,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Bleed Duration','40% increased Bleed Duration'],
				rarity: 0,
				n:[nodes[303]],
				bleed_duration: 40
					};		

			nodes[305] = { 
				x:801,
				y:370,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased PotionEffect Duration','15% increased PotionEffect Duration'],
				rarity: 0,
				n:[nodes[89]],
				potion_effect_duration: 15
					};		

			nodes[306] = { 
				x:815,
				y:384,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased PotionEffect Duration','15% increased PotionEffect Duration'],
				rarity: 0,
				n:[nodes[305]],
				potion_effect_duration: 15
					};	

			nodes[307] = { 
				x:830,
				y:370,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Alchemists Flasks','30% increased PotionEffect Duration','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[306]],
				potion_effect_duration: 30,
				movement_speed: 5
					};

			nodes[308] = { 
				x:831,
				y:313,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[115]],
				movement_speed: 5
					};						
					
			nodes[309] = { 
				x:817,
				y:299,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Movement Speed','5% increased Movement Speed'],
				rarity: 0,
				n:[nodes[308]],
				movement_speed: 5
					};	

			nodes[310] = { 
				x:802,
				y:314,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Critical Hit Chance','8% increased Critical Hit Chance'],
				rarity: 0,
				n:[nodes[309]],
				critical_hit_chance: 8
					};						

			nodes[311] = { 
				x:788,
				y:299,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Culling Strike','Enemies hit below 15% of their maximum life are instantly killed.'],
				rarity: 1,
				n:[nodes[310]],
				skill_culling_strike: 1
					};	

			nodes[312] = { 
				x:760,
				y:187,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[117]],
				perk_effectiveness_more: 2
					};	
					
			nodes[313] = { 
				x:747,
				y:159,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['More Perk Effect','2% more Effectiveness of Perks'],
				rarity: 0,
				n:[nodes[312]],
				perk_effectiveness_more: 2
					};						

			nodes[314] = { 
				x:718,
				y:145,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Gem Socket','Empty Gem Socket'], has_gem: 0,
				rarity: 0,
				n:[nodes[313]],
				gem_socket_add: 1
					};

			nodes[315] = { 
				x:745,
				y:243,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Less Projectile Damage','10% less Projectile Damage'],
				rarity: 0,
				n:[nodes[91]],
				projectile_damage_more: -10
					};	

			nodes[316] = { 
				x:760,
				y:229,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Less Projectile Damage','10% less Projectile Damage'],
				rarity: 0,
				n:[nodes[315]],
				projectile_damage_more: -10
					};

			nodes[317] = { 
				x:745,
				y:215,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Blunt Bolts','The closer the enemy hit by a projectile, the','more damage the projectile deals','If the monster is further away, it deals significantly less damage.'],
				rarity: 1,
				n:[nodes[316]],
				skill_blunt_bolts: 1
					};						
	
	
			nodes[318] = { 
				x:690,
				y:186,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Less Projectile Damage','10% less Projectile Damage'],
				rarity: 0,
				n:[nodes[91]],
				projectile_damage_more: -10
					};		

			nodes[319] = { 
				x:703,
				y:173,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Less Projectile Damage','10% less Projectile Damage'],
				rarity: 0,
				n:[nodes[318]],
				projectile_damage_more: -10
					};						

			nodes[320] = { 
				x:718,
				y:187,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Long shot','The further away the enemy hit by a projectile is,','the more damage the projectile deals. If the enemy','is closer, your attack deals significantly less damage.'],
				rarity: 1,
				n:[nodes[319]],
				skill_long_shot: 1
					};	
					
			nodes[321] = { 
				x:662,
				y:286,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Projectile Damage','10% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[38]],
				projectile_damage: 10
					};						
					
			nodes[322] = { 
				x:676,
				y:299,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Sniper','5% more Projectile Damage','+2% added Critical Hit Chance'],
				rarity: 0,
				n:[nodes[321]],
				projectile_damage_more: 5,
				critical_hit_chance_add: 2
					};

			nodes[323] = { 
				x:690,
				y:285,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Projectile Damage','10% increased Projectile Damage'],
				rarity: 0,
				n:[nodes[322],nodes[91]],
				projectile_damage: 10
					};	

			nodes[324] = { 
				x:647,
				y:257,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee Damage','10% increased Melee Damage'],
				rarity: 0,
				n:[nodes[38]],
				melee_damage: 10
					};

			nodes[325] = { 
				x:662,
				y:243,
				r:10,s:2, 
				stat:'off', 
				tooltip: ['Heavy Strike','5% more Melee Damage','30% increased Critical Damage Multiplier'],
				rarity: 0,
				n:[nodes[324]],
				melee_damage_more: 5,
				critical_damage_multiplier: 30
					};	

			nodes[326] = { 
				x:676,
				y:256,
				r:5,s:1, 
				stat:'off', 
				tooltip: ['Increased Melee Damage','10% increased Melee Damage'],
				rarity: 0,
				n:[nodes[325],nodes[91]],
			melee_damage: 10
					};

	return nodes;
					
					
        }